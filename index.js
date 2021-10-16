let fs = require('fs');
let http = require('http');
let express = require('express');

let app = express();

app.get('/', (request, response) => {
    let html = fs.readFileSync('./public/index.html').toString();
    let scripts = [];

    let components = fs.readdirSync('./components');
    for (let c = 0; c < components.length; c++) { scripts.push(`<script src="components/${components[c]}"></script>`) }

    let views = fs.readdirSync('./views');
    for (let v = 0; v < views.length; v++) { scripts.push(`<script src="views/${views[v]}"></script>`) }

    let links = [];
    let css = fs.readdirSync('./public/css');
    for (let c = 0; c < css.length; c++) {
        if (!css[c].endsWith('.map')) { links.push(`<link rel="stylesheet" href="css/${css[c]}">`) }
    }

    response.send(
        html
            .replace('[[scripts]]', scripts.join('\n'))
            .replace('[[styles]]', links.join('\n'))
    );
});

app.use('/components', express.static('components'));
app.use('/views', express.static('views'));
app.use('/sass', express.static('sass'));
app.use('/', express.static('public'));

http.createServer(app).listen(8080, () => { console.log('server hosted at http://localhost:8080') });