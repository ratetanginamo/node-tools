#!/usr/bin/env node
const axios = require('axios');
const inquirer = require('inquirer');
const chalk = require('chalk');

async function main() {
  const { ip } = await inquirer.prompt([{ name: 'ip', message: 'Enter IP:' }]);
  try {
    const res = await axios.get(`https://ipinfo.io/${ip}/json`);
    console.log(chalk.green(JSON.stringify(res.data, null, 2)));
  } catch (err) {
    console.log(chalk.red('Error fetching IP info:', err.message));
  }
}

main();
      
