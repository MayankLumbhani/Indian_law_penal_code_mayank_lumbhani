const mongoose = require("mongoose");

const lawSchema = new mongoose.Schema(
  {
    // ─── Which act does this section belong to? ──────────────
    // This is your most important filter field.
    // Every single document MUST have this.
    act: {
      type: String,
      required: [true, "Act name is required"],
      enum: ["CRPC", "IPC", "CPC", "HMA", "IDA", "IEA", "NIA", "MVA"],
      uppercase: true,
      trim: true,
      index: true,        // indexed because every filter query uses this
    },

    // ─── Chapter (optional — not all acts have chapters) ─────
    // CPC, IDA, MVA have no chapters — they'll just be null
    chapter: {
      type: Number,
      default: null,
    },

    // ─── Chapter title (only IPC has this) ───────────────────
    chapter_title: {
      type: String,
      trim: true,
      default: null,
    },

    // ─── Section number ───────────────────────────────────────
    // Mixed type because some sections are "13A", "304B" (strings)
    // and others are plain numbers like 1, 2, 3
    // We store everything as String for consistency
    section: {
      type: String,
      required: [true, "Section number is required"],
      trim: true,
    },

    // ─── Section title ────────────────────────────────────────
    // Normalized: dataset's "title" and "section_title" both map here
    section_title: {
      type: String,
      required: [true, "Section title is required"],
      trim: true,
    },

    // ─── Section description ──────────────────────────────────
    // Normalized: dataset's "description" and "section_desc" both map here
    section_desc: {
      type: String,
      required: [true, "Section description is required"],
      trim: true,
    },

    // ─── Soft delete flag ─────────────────────────────────────
    // Never permanently delete — just mark as deleted
    // Gives you the "archived" routes for free
    isDeleted: {
      type: Boolean,
      default: false,
      index: true,
    },

    // ─── View count for trending/popular routes ───────────────
    views: {
      type: Number,
      default: 0,
      index: true,
    },

    // ─── Bookmark count ───────────────────────────────────────
    bookmarkCount: {
      type: Number,
      default: 0,
    },
  },

  {
    // ─── Automatic timestamps ─────────────────────────────────
    // Mongoose auto-manages createdAt and updatedAt for you
    // Gives you the "recent laws" and "sort by date" routes for free
    timestamps: true,

    // ─── Clean JSON output ────────────────────────────────────
    // When you call res.json(), removes __v from the response
    toJSON: {
      transform: function (doc, ret) {
        delete ret.__v;
        return ret;
      },
    },
  }
);

// ─── Compound Index ───────────────────────────────────────────
// When someone filters by act AND section together (very common)
// MongoDB uses this compound index instead of scanning everything
lawSchema.index({ act: 1, section: 1 });

// ─── Text Index for Search ────────────────────────────────────
// Powers your /search/laws?q=murder route
// MongoDB will search across all three fields simultaneously
lawSchema.index(
  {
    section_title: "text",
    section_desc: "text",
    chapter_title: "text",
  },
  {
    weights: {
      section_title: 10,   // title match is most important
      section_desc: 5,     // description match is second
      chapter_title: 2,    // chapter match is least important
    },
    name: "law_text_search",
  }
);

const Law = mongoose.model("Law", lawSchema);

module.exports = Law;