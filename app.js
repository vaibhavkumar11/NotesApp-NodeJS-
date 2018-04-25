console.log("Starting app.js");
const fs = require("fs");
const _ = require("lodash");
const yargs = require("yargs");

const notes = require("./notes.js");

const argv = yargs.argv;
var command = argv._[0];
console.log("Command: ", command);
console.log("Yargs", argv);

if (command === "add") {
  var note = notes.addNotes(argv.title, argv.body);
  if (note) {
    console.log("Note Created");
    notes.logNote(note);
  } else {
    console.log("Note tite taken");
  }
} else if (command === "list") {
  var allNotes = notes.getAll();
  console.log(`Printing ${allNotes.length} note(s)`);
  allNotes.forEach(note => notes.logNote(note));
} else if (command === "read") {
  var note = notes.getNotes(argv.title);
  if (note) {
    console.log("Note found");
    notes.logNote(note);
  } else {
    console.log("Note not found");
  }
} else if (command === "remove") {
  var removedNote = notes.removeNotes(argv.title);
  var message = removedNote ? "Note has been removed" : "Note not found";
  console.log(message);
} else console.log("Command not recognized");
