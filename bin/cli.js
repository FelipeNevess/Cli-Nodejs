#!/usr/bin/env node

const args = process
  .argv
  .splice(process.execArgv.length + 2), nome = args[0];

const app = require('../src/app').getStated;

app();
