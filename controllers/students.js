exports.getAddNewStudentPage = (req, res) => {
    res.render('Strona Główna', { title: 'Dodaj nowego studenta' });
};

exports.addNewStudent = (req, res) => {
    const { fullName, code, fieldOfStudies } = req.body;
    res.redirect('/sukces');
};