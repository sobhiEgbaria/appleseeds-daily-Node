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

const saveNote = function (notes) {
  const noteJson = JSON.stringify(notes);
  fs.writeFileSync("2.1Json.json", noteJson);
};

const addNote = function (title, body) {
  const notes = loadNote();

  const duplicateNote = notes.filter((note) => {
    if (title === note.title) {
      return true;
    }
  });
  if (duplicateNote.length === 0) {
    notes.push({
      title: title,
      body: body,
    });
    console.log("done the note was added");
  } else {
    console.log("the note was taken");
  }

  saveNote(notes);
};

const removeNote = function () {};

module.exports = {
  addNote: addNote,
  removeNote: removeNote,
};
