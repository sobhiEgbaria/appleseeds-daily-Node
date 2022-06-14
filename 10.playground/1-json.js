// 0.0 require the file system
const fs = require("fs");

// //1.0 ===> convert obj to Json
// const book = {
//   title: "one piece",
//   author: "Odda",
// };

// const bookJson = JSON.stringify(book); // js method convert obj to json string
// console.log(book); // obj
// console.log(bookJson); // json string

// const bookParse = JSON.parse(bookJson); // js method convert jsonString to obj
// console.log(bookParse);
// console.log(bookParse.title);
// console.log(bookParse.author);

// //2.0 ===> create json file in fs

// const book2 = {
//   title: "game of thrones",
//   author: "JR.martin",
// };

// const book2Json = JSON.stringify(book2);
// fs.writeFileSync("1-json.json", book2Json); // create json file

// 3.0 ===> read data from json file
// 3.0 ===> read data from json file

// const dataBuffer = fs.readFileSync("1-json.json"); // get the data as a binary data
// console.log(dataBuffer);

// const dataJson = dataBuffer.toString(); //convert the buffer data to json
// console.log(dataJson);

// const data = JSON.parse(dataJson); //js method convert jsonString to obj
// console.log(data.author);

// 4.0 update json file values title and author

const dataBuffer = fs.readFileSync("1-json.json");
const dataJson = dataBuffer.toString();
const data = JSON.parse(dataJson);
console.log(data.title);
console.log(data.author);

data.title = "breaking bad";
data.author = "roger fedrrer";

console.log(data.title);
console.log(data.author);

const bookJson = JSON.stringify(data);
fs.writeFileSync("1-json.json", bookJson);
