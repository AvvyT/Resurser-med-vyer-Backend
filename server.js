const express = require('express');
const app = express();

/* Using template engines with Express */
app.set('view engine', 'pug');
app.use(express.urlencoded()); // middleware för form
app.use(express.static("./public")); // för att style.css filen

const list = ["Uno", "Dos", "Tres"]

app.get('/', function (_, res) {
    res.render('index', { title: 'Hej', list })
});

app.post('/room', (req, res) => {
    list.push(req.body.name);
    res.redirect('/');
});


app.listen(3001, () => { console.log('server startad på 3001'); });