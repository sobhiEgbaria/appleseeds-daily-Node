//2.1 ===> take input form user in the terminal
// let a = +process.argv[2];
// let b = +process.argv[3];
// console.log(a + b);

//2.1 ===> add and remove condition
const command = process.argv[2];
if (command === "add") {
  console.log("the note was added");
} else {
  console.log("not added");
}

// fs.copyFile("./readme.txt", "copyreadme.txt", (err) => {
//   if (err) {
//     console.log(err);
//   }
// });

// fs.rename("readme.txt", "changed.txt", (err) => {
//   if (err) {
//     console.log(err);
//   }
// });

// console.log(fs.readdirSync(__dirname));
// const files = fs.readdirSync(__dirname);
// files.forEach((file) => {
//   console.log(file);
// });
// console.log("this");
