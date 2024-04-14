// Importowanie modułów
const express = require('express');
const bodyParser = require('body-parser');
// Inicjalizacja aplikacji Express
const app = express();
const PORT = process.env.PORT || 3000;

// Ustawienie silnika szablonów EJS
app.set('view engine', 'ejs');

// Ustawienie parsowania danych z formularza
app.use(bodyParser.urlencoded({ extended: true }));

// Routing
app.get('/', (req, res) => {
    res.render('Home');
});

app.get('/success', (req, res) => {
    res.render('Success');
});

app.get('/students-list', (req, res) => {
    res.render('List');
});

app.post('/add-student', (req, res) => {
    res.redirect('/add-student');
});

// Nasłuchiwanie na porcie 3000
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});
