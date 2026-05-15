/**
 * IPC Dataset Fixer
 *
 * Fix 1:
 * Rename 'Section' → 'section'
 * to match schema consistency.
 *
 * Fix 2:
 * Add missing description for IPC 304B.
 */

const fs = require("fs");
const path = require("path");

const FILE_PATH = path.join(__dirname, "../dataset/ipc.json");

// Read existing broken IPC dataset
const raw = JSON.parse(fs.readFileSync(FILE_PATH, "utf-8"));

// Fix records
const fixed = raw.map((record) => {

  // Rename Section -> section
  const newRecord = {
    chapter: record.chapter,
    chapter_title: record.chapter_title,

    // Capital S -> lowercase s
    section: record.Section,

    section_title: record.section_title,
    section_desc: record.section_desc,
  };

  // Add missing description for IPC 304B
  if (newRecord.section === "304B" && !newRecord.section_desc) {

    newRecord.section_desc =
      'Where the death of a woman is caused by any burns or bodily injury or occurs under abnormal circumstances within seven years of marriage, and it is shown that soon before her death she was subjected to cruelty or harassment by her husband or any relative of her husband for, or in connection with, any demand for dowry, such death shall be called "dowry death", and such husband or relative shall be deemed to have caused her death.';
  }

  return newRecord;
});

// Overwrite same file with fixed data
fs.writeFileSync(FILE_PATH, JSON.stringify(fixed, null, 2));

console.log(`✅ IPC fixed successfully`);
console.log(`📁 Updated file: ${FILE_PATH}`);