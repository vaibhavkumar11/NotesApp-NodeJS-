console.log("Starting Notes.js");
const fs = require("fs");

var addNotes = (title, body) => {
  var notes = [];
  var note = {
    title,
    body
  };

  try {
    var notesString = fs.readFileSync("notes-data.json");
    notes = JSON.parse(notesString);
  } catch (e) {}

  var duplicateNotes = notes.filter(title => note.title === title);
  if (duplicateNotes.length === 0) {
    notes.push(note);
    fs.writeFileSync("notes-data.json", JSON.stringify(notes));
  }
};

var getAll = () => {
  console.log("Print all notes");
};

var getNotes = title => {
  console.log("Note is:", title);
};

var removeNotes = title => {
  console.log("Note has been removed");
};

module.exports = {
  addNotes,
  getAll,
  getNotes,
  removeNotes
};
