import { exec } from 'child_process';
import inquirer from 'inquirer';

const commitTypes = [
  'build',
  'chore',
  'ci',
  'docs',
  'feat',
  'fix',
  'perf',
  'refactor',
  'revert',
  'style',
  'test',
];

inquirer
  .prompt([
    {
      type: 'list',
      name: 'type',
      message: 'What type of git commit is this?',
      choices: commitTypes,
    },
    {
      type: 'input',
      name: 'message',
      message: 'Enter the commit message:',
      validate: function (input) {
        if (input.length < 3) {
          return 'Commit message must be longer than 3 characters.';
        }
        return true;
      },
    },
  ])
  .then((answers) => {
    const commitCommand = `git commit -m "${answers.type}: ${answers.message}"`;
    exec(commitCommand, (error, stdout, stderr) => {
      if (error) {
        console.error(`Error: ${error.message}`);
        return;
      }
      if (stderr) {
        console.error(`Stderr: ${stderr}`);
        return;
      }
      console.log(`Stdout: ${stdout}`);
    });
  });
