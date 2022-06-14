const fs = require("fs");
const loadNote = function () {
  try {
    const noteBuffer = fs.readFileSync("2.1Json.json");
    const noteJson = noteBuffer.toString();
    const note = JSON.parse(noteJson);
    return note;
  } catch (error) {
    return [];
  }
};

const addNote = function (title, body) {
  const note = loadNote();
  console.log(note);
};

const removeNote = function () {};

module.exports = {
  addNote: addNote,
  removeNote: removeNote,
};
