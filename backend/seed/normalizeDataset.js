const fs = require("fs");
const path = require("path");

const ipc = require("../raw-data/ipc.json");
const crpc = require("../raw-data/crpc.json");
const cpc = require("../raw-data/cpc.json");
const hma = require("../raw-data/hma.json");
const ida = require("../raw-data/ida.json");
const iea = require("../raw-data/iea.json");
const nia = require("../raw-data/nia.json");
const mva = require("../raw-data/mva.json");

let unifiedData = [];



// Normalize IPC

const normalizedIPC = ipc.map((item) => ({

  act: "IPC",

  chapter: item.chapter || null,

  chapter_title: item.chapter_title || "",

  section: item.Section || item.section || null,

  section_title: item.section_title || "",

  description: item.section_desc || "",
}));



// Normalize CRPC

const normalizedCRPC = crpc.map((item) => ({

  act: "CRPC",

  chapter: item.chapter || null,

  chapter_title: "",

  section: item.section || null,

  section_title: item.section_title || "",

  description: item.section_desc || "",
}));



// Normalize CPC

const normalizedCPC = cpc.map((item) => ({

  act: "CPC",

  chapter: null,

  chapter_title: "",

  section: item.section || null,

  section_title: item.title || "",

  description: item.description || "",
}));



// Normalize HMA

const normalizedHMA = hma.map((item) => {

  const key = Object.keys(item)[0];

  const value = item[key];

  const parts = value.split(",");

  return {
    act: "HMA",

    chapter: Number(parts[0]) || null,

    chapter_title: "",

    section: Number(parts[1]) || null,

    section_title: parts[2]?.trim() || "",

    description: parts.slice(3).join(",").trim() || "",
  };
});



// Normalize IDA

const normalizedIDA = ida.map((item) => ({
    
  act: "IDA",

  chapter: null,

  chapter_title: "",

  section: item.section || null,

  section_title: item.title || "",

  description: item.description || "",
}));



// Normalize IEA

const normalizedIEA = iea.map((item) => ({

  act: "IEA",

  chapter: item.chapter || null,

  chapter_title: "",

  section: item.section || null,

  section_title: item.section_title || "",

  description: item.section_desc || "",
}));



// Normalize NIA

const normalizedNIA = nia.map((item) => ({

  act: "NIA",

  chapter: item.chapter || null,

  chapter_title: "",

  section: item.section || null,

  section_title: item.section_title || "",

  description: item.section_desc || "",
}));



// Normalize MVA

const normalizedMVA = mva.map((item) => ({

  act: "MVA",

  chapter: null,

  chapter_title: "",

  section: item.section || null,

  section_title: item.title || "",

  description: item.description || "",
}));

unifiedData = [
  ...normalizedIPC,
  ...normalizedCRPC,
  ...normalizedCPC,
  ...normalizedHMA,
  ...normalizedIDA,
  ...normalizedIEA,
  ...normalizedNIA,
  ...normalizedMVA
];

fs.writeFileSync(
  path.join(__dirname, "clean-laws.json"),
  JSON.stringify(unifiedData, null, 2)
);

console.log("Dataset normalized successfully");
console.log(`Total records: ${unifiedData.length}`);