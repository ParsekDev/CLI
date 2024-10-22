#!/usr/bin/env node

const yargs = require("yargs")
const { version } = require("./package.json")

yargs.usage("Parsek CLI")
yargs.version(version)
yargs.epilogue("For more information, find the manual at https://parsek.dev")

yargs.command({
  command: "configure <key> [value]",
  aliases: ["config", "cfg"],
  desc: "Set a config variable",
  builder: (yargs) => yargs.default("value", "true"),
  handler: (argv) => {
    console.log(`setting ${argv.key} to ${argv.value}`)
  }
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
