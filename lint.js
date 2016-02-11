#!/usr/bin/env node

'use strict';

const inquirer = require("inquirer");
const path = require('path');
const _ = require('lodash')
const fs = require('fs');


let projectType = {
  type: 'list',
  name: 'projectType',
  default: 'eslint',
  message: 'Which linting config do you want to set up?',
  choices: fs.readdirSync('./lib')
};


inquirer.prompt([projectType], function(choice) {
  let targetFileExists = _.find(choice.projectType);
  if (targetFileExists) {
      fs.createReadStream(`./lib/${choice.projectType}`).pipe(fs.createWriteStream(choice.projectType));
  }
});
