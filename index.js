let http = require('http');
let express = require('express');

let app = express();

app.get('/', (request, response) => { response.sendFile('public/index.html') });
app.use('/sass', (request, response) => { express.static('sass') });
app.use('/', express.static('public'));

http.createServer(app).listen(8080, () => { console.log('server hosted at http://localhost:8080') });