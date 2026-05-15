/**
 * HMA Dataset Fixer
 */

const fs = require("fs");
const path = require("path");

const FILE_PATH = path.join(__dirname, "../dataset/hma.json");

const raw = JSON.parse(fs.readFileSync(FILE_PATH, "utf-8"));

let fixed = [];
let currentSection = null;

for (const item of raw) {
  const val = item["chapter,section,section_title,section_desc"];

  if (!val || val.trim() === "") continue;

  const mainMatch = val.match(/^(\d+),(\d+[A-Z]?),(.+?),(.+)$/);

  if (mainMatch) {
    currentSection = {
      chapter: parseInt(mainMatch[1]),

      section: isNaN(mainMatch[2])
        ? mainMatch[2]
        : parseInt(mainMatch[2]),

      section_title: mainMatch[3]
        .trim()
        .replace(/^\"|\"$/g, ""),

      section_desc: mainMatch[4]
        .trim()
        .replace(/^\"|\"$/g, ""),
    };

    fixed.push(currentSection);

  } else if (currentSection) {

    currentSection.section_desc +=
      " " + val.trim().replace(/^\"|\"$/g, "");
  }
}

fs.writeFileSync(FILE_PATH, JSON.stringify(fixed, null, 2));

console.log(`✅ HMA fixed successfully`);
console.log(`📁 Updated file: ${FILE_PATH}`);