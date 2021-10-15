let fs = require('fs');
let child_process = require('child_process');

child_process.exec('npm run _compile_sass');

if (fs.existsSync('./build')) { fs.rmSync('./build', { recursive: true }) }
//fs.mkdirSync('./build');

fs.cpSync('./public', './build', { recursive: true });
