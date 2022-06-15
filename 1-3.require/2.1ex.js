const fs = require("fs");

// // 1.new txt file using fs module
// fs.writeFileSync("newTxtFile.txt", "txt file created by writeFileSync ");

// // 2. copy of the newly created txt file using  fs module.
// fs.copyFileSync("newTxtFile.txt", "copyOfNewTxtFile.txt");

/* 3. Rename one of the files using a method from the fs module. */
// fs.writeFileSync("toRename.txt", "txt file created by writeFileSync ");
// fs.renameSync("toRename.txt", "newNme.txt");

// 5. add new text to the same file
fs.appendFileSync(
  "newTxtFile.txt",
  "new text to existing file by appendFileSync "
);
