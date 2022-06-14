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

const removeNote = function (title) {
  const notes = loadNote();

  const afterRemove = notes.filter((note) => {
    if (note.title !== title) {
      return true;
    }
  });
  if (afterRemove.length === notes.length) {
    console.log("no note was deleted");
  } else {
    console.log("done deleting");
  }
  saveNote(afterRemove);
};

const updateNote = function (title, body) {
  const notes = loadNote();
  const updatingNote = notes.map((note) => {
    if (title === note.title) {
      note.body = body;
    }
    return note;
  });

  saveNote(updatingNote);
};

module.exports = {
  addNote: addNote,
  removeNote: removeNote,
  updateNote: updateNote,
};
