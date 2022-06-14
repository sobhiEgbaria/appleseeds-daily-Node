const fs = require("fs");

const loadNote = () => {
  try {
    const noteBuffer = fs.readFileSync("2.1Json.json");
    const noteJson = noteBuffer.toString();
    const note = JSON.parse(noteJson);
    return note;
  } catch (error) {
    return [];
  }
};

const saveNote = (notes) => {
  const noteJson = JSON.stringify(notes);
  fs.writeFileSync("2.1Json.json", noteJson);
};

const addNote = (title, body) => {
  const notes = loadNote();

  //   const duplicateNotes = notes.filter((note) => note.title === title);
  const duplicateNote = notes.find((note) => note.title === title);

  if (!duplicateNote) {
    // (!duplicateNote) === (duplicateNote === undefine)
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

const removeNote = (title) => {
  const notes = loadNote();

  const afterRemove = notes.filter((note) => note.title !== title);

  if (afterRemove.length === notes.length) {
    console.log("no note was deleted");
  } else {
    console.log("done deleting");
  }
  saveNote(afterRemove);
};

const updateNote = (title, body) => {
  const notes = loadNote();
  const updatingNote = notes.map((note) => {
    if (title === note.title) {
      note.body = body;
    }
    return note;
  });

  saveNote(updatingNote);
};

const readNote = (title, body) => {
  const notes = loadNote();
  const theNoteToRead = notes.find((note) => note.title === title);

  if (theNoteToRead) {
    console.log(theNoteToRead.body);
  } else {
    console.log("no note to read");
  }
};

module.exports = {
  addNote: addNote,
  removeNote: removeNote,
  updateNote: updateNote,
  readNote: readNote,
};
