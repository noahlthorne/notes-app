const chalk = require("chalk");
const yargs = require("yargs");
const notes = require("./notes.js");
const fetch = require("node-fetch");

yargs.version("1.1.0");

yargs.command({
  command: "add",
  describe: "Adds a new note",
  builder: {
    title: {
      describe: "Title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note body",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    notes.addNote(argv.title, argv.body);
  },
});

yargs.command({
  command: "remove",
  describe: "Removes a note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    notes.remmoveNote(argv.title);
  },
});

yargs.command({
  command: "list",
  describe: "Lists notes",
  handler: function () {
    console.log("listing notes...");
  },
});

yargs.command({
  command: "read",
  describe: "displays the note",
  handler: function () {
    console.log("reading notes....");
  },
});

yargs.parse();
