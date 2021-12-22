let fs = require('fs');
let child_process = require('child_process');

child_process.exec('npm run _compile_sass');

if (fs.existsSync('./build')) { fs.rmSync('./build', { recursive: true }) }
//fs.mkdirSync('./build');

fs.cpSync('./public', './build', { recursive: true });
//fs.rmSync('./build/css', { recursive: true });

let recur = (path, callback, filter) => {
    let files = fs.readdirSync(path);
    for (let f = 0; f < files.length; f++) {
        if (fs.statSync(`${path}/${files[f]}`).isDirectory()) { recur(`${path}/${files[f]}`, callback, filter) }
        else {
            if (filter && filter(`${path}/${files[f]}`) == false) { continue; }
            callback(`${path}/${files[f]}`);
        }
    }
}

let build_tags = (path, builder, join, filter) => {
    let list = [];
    recur(path, (p) => { list.push(builder(p)) }, filter);
    if (join) { return list.join('\n') }
    else { return list }
}

let styles = build_tags('./public/css', (path) => `<link rel="stylesheet" href="${path.slice(9)}">`, true, (p) => !p.endsWith('.map'));

/*(() => {
    let css = [];

    let dir = fs.readdirSync('./public/css');
    for (let d = 0; d < dir.length; d++) { if (dir[d].endsWith('.css')) { css.push(fs.readFileSync(`./public/css/${dir[d]}`).toString()) } }
    fs.writeFileSync('./build/styles.css', css.join('\n'));
})();*/

(() => {
    let components = [];
    
    let dir = fs.readdirSync('./components');
    for (let d = 0; d < dir.length; d++) { components.push(fs.readFileSync(`./components/${dir[d]}`).toString()) }
    fs.writeFileSync('./build/components.js', components.join('\n'));
})();

(() => {
    let views = [];

    let dir = fs.readdirSync('./views');
    for (let d = 0; d < dir.length; d++) { views.push(fs.readFileSync(`./views/${dir[d]}`).toString()) }
    fs.writeFileSync('./build/views.js', views.join('\n'));
})();

let html = fs.readFileSync('./build/index.html').toString()
    .replace('[[styles]]', styles)
    .replace('[[scripts]]', '<script src="views.js"></script>\n<script src="components.js"></script>');

fs.writeFileSync('./build/index.html', html);