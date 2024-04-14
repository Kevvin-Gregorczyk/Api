const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');


app.get('/', (req, res) => {
    res.render('Home');
});

app.post('/Dodaj-Studenta', (req, res) => {
    const fullName = req.body.fullName;
    const code = req.body.code;
    const fieldOfStudies = req.body.fieldOfStudies;
    res.redirect('/Sukces');
});

app.get('/Sukces', (req, res) => {
    res.render('Sukces');
});
app.listen(PORT, () => {
    console.log(`Serwer działa na porcie ${PORT}`);
});
