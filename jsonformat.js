#!/usr/bin/env node
const fs = require('fs');
const inquirer = require('inquirer');
const chalk = require('chalk');

async function main() {
  const { file } = await inquirer.prompt([{ name: 'file', message: 'Enter JSON file path:' }]);
  try {
    const data = fs.readFileSync(file, 'utf-8');
    const json = JSON.parse(data);
    console.log(chalk.green(JSON.stringify(json, null, 2)));
  } catch (err) {
    console.log(chalk.red('Error reading or parsing JSON:', err.message));
  }
}

main();
