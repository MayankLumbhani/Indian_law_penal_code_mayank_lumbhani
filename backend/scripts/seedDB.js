/**
 * Database Seeder
 *
 * Reads all 8 cleaned JSON dataset files and imports them
 * into MongoDB as a single unified 'laws' collection.
 *
 * Each dataset has slightly different field names.
 * This script normalizes everything into the Law schema shape:
 *   { act, chapter, chapter_title, section, section_title, section_desc }
 *
 * Run:  node scripts/seedDB.js
 * Wipe: node scripts/seedDB.js --wipe
 */

require("dotenv").config();

const mongoose = require("mongoose");
const fs = require("fs");
const path = require("path");
const Law = require("../src/models/law.model");

// ─── Dataset file config ──────────────────────────────────────
// Each entry defines:
//   file    → which JSON file to read
//   act     → what value to store in the `act` field
//   fields  → how to map that dataset's keys → our schema keys
const DATASETS = [
  {
    file: "crpc.json",
    act: "CRPC",
    fields: {
      chapter: "chapter",
      chapter_title: null,
      section: "section",
      section_title: "section_title",
      section_desc: "section_desc",
    },
  },
  {
    file: "ipc.json",
    act: "IPC",
    fields: {
      chapter: "chapter",
      chapter_title: "chapter_title",
      section: "section",
      section_title: "section_title",
      section_desc: "section_desc",
    },
  },
  {
    file: "cpc.json",
    act: "CPC",
    fields: {
      chapter: null,
      chapter_title: null,
      section: "section",
      section_title: "title",          // CPC uses 'title' not 'section_title'
      section_desc: "description",     // CPC uses 'description' not 'section_desc'
    },
  },
  {
    file: "hma.json",
    act: "HMA",
    fields: {
      chapter: "chapter",
      chapter_title: null,
      section: "section",
      section_title: "section_title",
      section_desc: "section_desc",
    },
  },
  {
    file: "ida.json",
    act: "IDA",
    fields: {
      chapter: null,
      chapter_title: null,
      section: "section",
      section_title: "title",          // IDA uses 'title'
      section_desc: "description",     // IDA uses 'description'
    },
  },
  {
    file: "iea.json",
    act: "IEA",
    fields: {
      chapter: "chapter",
      chapter_title: null,
      section: "section",
      section_title: "section_title",
      section_desc: "section_desc",
    },
  },
  {
    file: "nia.json",
    act: "NIA",
    fields: {
      chapter: "chapter",
      chapter_title: null,
      section: "section",
      section_title: "section_title",
      section_desc: "section_desc",
    },
  },
  {
    file: "MVA.json",
    act: "MVA",
    fields: {
      chapter: null,
      chapter_title: null,
      section: "section",
      section_title: "title",          // MVA uses 'title'
      section_desc: "description",     // MVA uses 'description'
    },
  },
];

// ─── Normalize one record ─────────────────────────────────────
// Takes a raw record from any dataset and converts it
// into the exact shape our Law schema expects
const normalizeRecord = (record, act, fields) => {
  return {
    act,

    chapter: fields.chapter ? record[fields.chapter] ?? null : null,

    chapter_title: fields.chapter_title
      ? record[fields.chapter_title] ?? null
      : null,

    // Always convert section to string
    // Handles both numeric (1,2,3) and alphanumeric (304B, 13A)
    section: String(record[fields.section]),

    section_title: record[fields.section_title]?.trim() ?? "",

    section_desc: record[fields.section_desc]?.trim() ?? "",
  };
};

// ─── Main seeder function ─────────────────────────────────────
const seedDB = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ MongoDB Connected");

    // --wipe flag: delete all existing laws before importing
    const shouldWipe = process.argv.includes("--wipe");
    if (shouldWipe) {
      await Law.deleteMany({});
      console.log("🗑️  Existing laws collection wiped");
    }

    let totalImported = 0;
    let totalSkipped = 0;

    // ── Process each dataset one by one ──
    for (const dataset of DATASETS) {
      const filePath = path.join(__dirname, "../dataset", dataset.file);

      // Check file exists
      if (!fs.existsSync(filePath)) {
        console.warn(`⚠️  File not found, skipping: ${dataset.file}`);
        continue;
      }

      // Read and parse JSON
      const raw = JSON.parse(fs.readFileSync(filePath, "utf-8"));

      // Normalize every record
      const normalized = [];
      for (const record of raw) {
        try {
          const doc = normalizeRecord(record, dataset.act, dataset.fields);

          // Skip records with empty section_title or section_desc
          if (!doc.section_title || !doc.section_desc) {
            totalSkipped++;
            continue;
          }

          normalized.push(doc);
        } catch (err) {
          console.warn(`⚠️  Skipped bad record in ${dataset.act}:`, err.message);
          totalSkipped++;
        }
      }

      // Insert all records for this dataset at once
      // ordered: false means if one fails, the rest still insert
      await Law.insertMany(normalized, { ordered: false });

      console.log(
        `📥 ${dataset.act.padEnd(5)} → ${normalized.length} records imported`
      );

      totalImported += normalized.length;
    }

    // ── Final summary ──
    console.log("─".repeat(40));
    console.log(`✅ Seeding complete`);
    console.log(`📊 Total imported : ${totalImported}`);
    console.log(`⏭️  Total skipped  : ${totalSkipped}`);

    // Verify in MongoDB
    const count = await Law.countDocuments();
    console.log(`📦 Total in DB    : ${count}`);

  } catch (error) {
    console.error("❌ Seeding failed:", error.message);
    process.exit(1);
  } finally {
    // Always disconnect after seeding — don't leave connection open
    await mongoose.disconnect();
    console.log("🔌 MongoDB Disconnected");
  }
};

seedDB();