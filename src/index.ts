#! /usr/bin/env node
import clipboard from "clipboardy";
import { Command } from "commander";

const program = new Command();

program.name("sol-headers").description("CLI to create solidity headers").version("1.0.0");

program
  .command("create", { isDefault: true })
  .description("Create solidity headers")
  .argument("<string>", "heading")
  .action(input => {
    let space = "";

    while (64 - (space.length + input.length) > space.length) {
      space += " ";
    }

    const output =
      "    /*//////////////////////////////////////////////////////////////" +
      "\n" +
      "    " +
      space +
      input.toUpperCase() +
      "\n" +
      "    //////////////////////////////////////////////////////////////*/";

    console.log(output);

    clipboard.writeSync(output);
  });

program.parse();
