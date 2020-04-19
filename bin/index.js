#!/usr/bin/env node


const program = require('commander');
const exec = require('child_process').exec;


program
  .version(require('../package').version)
  .option('-i, --integer <n>', 'An integer argument', parseInt)
  .option('-r, --recursive', 'Remove recursively')
  .usage('<command> [options]')
  .parse(process.argv);


if (program.args == "reactbase") {
  exec("git clone https://github.com/xuguanjie0706/react-cli.git", function (err, stdout, stderr) {
    exec("rm -rf .git")
    // console.log(err, stdout, stderr)
  })
} else {
  console.log("无效命令行");
}

// console.log(program.args);



// program
//   .version('0.1.0')
//   .arguments('<cmd> [env]')
//   .action(function (cmd, env) {
//     cmdValue = cmd;
//     envValue = env;
//   });
















// console.log();
// console.log(' int: %j', program.integer);


// if (program.args == "rn") exec("git clone https://git.dev.tencent.com/xu0105/rn.git", function (err, stdout, stderr) {
//   console.log(err, stdout, stderr)
// })

