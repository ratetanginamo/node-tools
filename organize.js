#!/usr/bin/env node
const fs = require('fs-extra');
const path = require('path');
const inquirer = require('inquirer');
const chalk = require('chalk');

async function main() {
  const { dir } = await inquirer.prompt([{ name: 'dir', message: 'Directory to organize:' }]);
  try {
    const files = fs.readdirSync(dir);
    files.forEach(file => {
      const ext = path.extname(file).slice(1) || 'others';
      const folder = path.join(dir, ext);
      fs.ensureDirSync(folder);
      fs.moveSync(path.join(dir, file), path.join(folder, file), { overwrite: true });
    });
    console.log(chalk.green('Files organized successfully!'));
  } catch (err) {
    console.log(chalk.red('Error organizing files:', err.message));
  }
}

main();
