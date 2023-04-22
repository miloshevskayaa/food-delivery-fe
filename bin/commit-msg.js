#!/usr/bin/env node

const fs = require('fs');
const { execSync } = require('child_process');

const masterBranchName = 'master';
const message = fs.readFileSync(process.env.HUSKY_GIT_PARAMS, 'utf8').trim();
const currentBranch = getCurrentBranch();
const currentMessage =
  currentBranch === masterBranchName
    ? `${message}`
    : `${currentBranch}: ${message}`;

fs.writeFileSync(process.env.HUSKY_GIT_PARAMS, currentMessage);
process.exit(0);

function getCurrentBranch() {
  const branches = execSync('git branch', { encoding: 'utf8' });

  return branches
    .split('\n')
    .find(b => b.charAt(0) === '*')
    .trim()
    .substring(2);
}
