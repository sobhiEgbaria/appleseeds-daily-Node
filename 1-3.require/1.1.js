// ====> 1.0
// console.log(global);
// console.log(global.console); // ==> global = window in Dom

// 1.1 ====> Node Modules anf file system

const note = require("./1.2Note");
const printNote = note();
console.log(printNote);

// 1.2 ====> create fs file by writeFileSync AND appendFileSync
const fs = require("fs");
fs.writeFileSync("1.3Create.txt", "this file was create by node //");

try {
  fs.appendFileSync("1.3Create.txt", "aaaaaaaaaaaaaa");
  console.log("done");
} catch {
  console.log("err");
}

//1.3  ===> require from npm

// const validator = require("validator");
// console.log(validator.isEmail("asdasd@a.com"));
