#!/usr/bin/env node
import chalk from 'chalk';
import CLI from './bin/CoolCLI.js';

const cli = new CLI();

cli.createCommand(['help','-h','--help'],()=>{
  console.log(`
  ${chalk.yellow('CoolCLI')}
  ${chalk.yellow('-h')} or ${chalk.yellow('--help')} to show this help.
  ${chalk.yellow('-v')} or ${chalk.yellow('--version')} to show version.
  `);
})

cli.createCommand(['version','-v','--version'],()=>{
  console.log(`${chalk.yellow('CoolCLI')} version 0.0.1`);
});

// default action
cli.createCommand([],()=>{
  console.log(`${chalk.yellow('CoolCLI 😀')}`);
})

const args = process.argv.slice(2);
cli.parse(args);
