#!/usr/bin/env node
const axios = require('axios');
const inquirer = require('inquirer');
const chalk = require('chalk');

async function main() {
  const { url } = await inquirer.prompt([{ name: 'url', message: 'Enter URL:' }]);
  try {
    const res = await axios.get(`https://tinyurl.com/api-create.php?url=${url}`);
    console.log(chalk.green('Shortened URL:'), res.data);
  } catch (err) {
    console.log(chalk.red('Error shortening URL:', err.message));
  }
}

main();
