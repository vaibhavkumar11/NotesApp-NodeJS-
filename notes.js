console.log("Starting Notes.js");
const fs = require("fs");

var fetchNotes = () => {
  try {
    var notesString = fs.readFileSync("notes-data.json");
    return JSON.parse(notesString);
  } catch (e) {
    return [];
  }
};

var saveNotes = notes => {
  fs.writeFileSync("notes-data.json", JSON.stringify(notes));
};

var addNotes = (title, body) => {
  var notes = fetchNotes();
  var note = {
    title,
    body
  };

  var duplicateNotes = notes.filter(note => note.title === title);

  if (duplicateNotes.length === 0) {
    notes.push(note);
    saveNotes(notes);
    return note;
  }
};

var getAll = () => {
  console.log("Print all notes");
};

var getNotes = title => {
  console.log("Note is:", title);
};

var removeNotes = title => {
  var notes = fetchNotes();
  var filteredNotes = notes.filter(note => note.title !== title);
  saveNotes(filteredNotes);
  return notes.length !== filteredNotes.length;
};

module.exports = {
  addNotes,
  getAll,
  getNotes,
  removeNotes
};
