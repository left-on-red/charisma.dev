let fs = require('fs');
let http = require('http');
let express = require('express');

let port = process.env.PORT || 8080;

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

let app = express();

app.get('/', (request, response) => {
    let html = fs.readFileSync('./public/index.html').toString();

    (() => {
        let components = build_tags('./components', (path) => `<script src="components/${path.slice(13)}"></script>`, false);
        let views = build_tags('./views', (path) => `<script src="views/${path.slice(8)}"></script>`, false);
        let styles = build_tags('./public/css', (path) => `<link rel="stylesheet" href="${path.slice(9)}">`, true, (p) => !p.endsWith('.map'));

        response.send(
            html
                .replace('[[scripts]]', [...components, ...views].join('\n'))
                .replace('[[styles]]', styles)
            )
    })();
});

app.use('/components', express.static('components'));
app.use('/views', express.static('views'));
app.use('/sass', express.static('sass'));
app.use('/', express.static('public'));

http.createServer(app).listen(port, () => { console.log(`server hosted at http://localhost:${port}`) });