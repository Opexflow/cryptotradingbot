#!/usr/bin/env node
const path = require('path');
const concurrently = require('concurrently');

concurrently([
    { command: 'node ../src/main', name: 'cryptotradingbot' },
], {
    prefix: 'name',
    killOthers: ['failure', 'success'],
    restartTries: 3,
    cwd: path.resolve(__dirname),
});
