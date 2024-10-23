#!/usr/bin/env node

import Yargs from "yargs/yargs"

const yargs = Yargs(Bun.argv.slice(2))
const version = Bun.env.VERSION as string

yargs.scriptName("parsek")
yargs.usage("Parsek CLI")
yargs.version(version)
yargs.epilogue("For more information, find the manual at https://parsek.dev")

yargs.command({
  command: "create",
  aliases: ["init"],
  describe: "Create parsek project",
  builder: (yargs) => {
    return yargs
  },
  handler: (argv) => {}
})

// Plugin commands
yargs.command({
  command: "plugin create",
  describe: "Create a new parsek plugin",
  builder: (yargs) => {
    return yargs
  },
  handler: (argv) => {}
})
yargs.command({
  command: "plugin add",
  describe: "Add a plugin to the project",
  builder: (yargs) => {
    return yargs
  },
  handler: (argv) => {}
})
yargs.command({
  command: "plugin remove",
  describe: "Remove a plugin from the project",
  builder: (yargs) => {
    return yargs
  },
  handler: (argv) => {}
})

yargs
  .showHelpOnFail(true)
  .help("help", "Show usage instructions.")
  .alias("h", "help")
  .command({
    command: "*",
    handler() {
      yargs.showHelp("log")
    }
  })
  .demandCommand()
  .recommendCommands()
  .strict()

yargs.argv
