// //2.1 ===> take input form user in the terminal
// let a = +process.argv[2];
// let b = +process.argv[3];
// console.log(a + b);

// //2.1 ===> add
// const command = process.argv[2];

// if (command === "add") {
//   console.log("DONE");
// } else {
//   console.log("not added");
// }

// 2.2 ==> using yarges to add and remove....
const { demandOption, argv } = require("yargs");
const yargs = require("yargs"); // npm package to to parsing arguments

//2.2.1 create add command
yargs.command({
  command: "add",
  describe: "(add a new note)",
  builder: {
    title: {
      describe: "note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "note title",
      demandOption: true,
      type: "string",
    },
  },
  handler: function () {
    console.log("title: " + argv.title + " body: " + argv.body);
  },
});

// 2.2.2 create Delete command
yargs.command({
  command: "delete",
  describe: "(Delete a new note)",
  handler: function () {
    console.log("done... Deleting a new note");
  },
});

// 2.2.3 create update command
yargs.command({
  command: "update",
  describe: "update the note",
  handler: function () {
    console.log("done... updating");
  },
});

// 2.2.4 create read command
yargs.command({
  command: "read",
  describe: "read the note",
  handler: function () {
    console.log("done... reading");
  },
});
// console.log(yargs.argv);
yargs.parse();
