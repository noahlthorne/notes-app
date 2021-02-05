const chalk = require("chalk");
const yargs = require("yargs");
const note = require("./notes.js");
const fetch = require("node-fetch");

yargs.version("1.1.0");

yargs.command({
  command: "add",
  describe: "Adds a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Noe body",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    console.log("Title: ", argv.title);
    console.log("Body: ", argv.body);
  },
});

yargs.command({
  command: "remove",
  describe: "Removes a note",
  handler: function () {
    console.log("removing a note all yall");
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
  describe: "Reads the note",
  handler: function () {
    console.log("reading notes....");
  },
});

yargs.parse();
