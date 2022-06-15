//1.0 ==> import and require?

// require is typically used with NodeJS to read and execute CommonJS modules.
//It came before es6  and is synchronic.
// if you are using require to get local modules, first you need to export them using module.exports.

// import is an ES module, and with export, they are known as ES6 import and export.
//it is asynchronous. We can’t use import or export outside ES modules.

//to use import 1-npm init  2- add to package.json "type":"module"

/* Create 3 functions using the export/import */
import { foo1, foo2, foo3 } from "./foo.js";

console.log(foo1(), foo2(), foo3());

//---------------------------------------------------------
/* Import the file system module using the import syntax. */
// const fs = require("fs")
import fs from "fs";

// __dirname, __pathname
