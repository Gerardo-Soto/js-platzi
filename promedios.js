const notes = [
    {
        course: "Educación Física",
        note: 10,
        credit: 2,
    },
    {
        course: "Programación",
        note: 8,
        credit: 5,
    },
    {
        course: "Finanzas personales",
        note: 7,
        credit: 5,
    },
];

console.log(notes);

const notesWithCredits = notes.map( function(noteObject) {
    return noteObject.note * noteObject.credit;
});

console.log('Notas ponderadas: ' +notesWithCredits);

// obtener los creditos de un objeto:
const credits = notes.map(function (noteObject) {
    return noteObject.credit;
});

console.log('Creditos de las notas');

const weight = credits.reduce(function (sum = 0, newVal) {
    return parseInt(sum) + parseInt( newVal);
});

console.log('Suma de todas las pondedaciones::: weight: ' + weight);

const sumAllNotesWithCredits = notesWithCredits.reduce(function (sum = 0, newCredit) {
    return sum + newCredit;
});

console.log('Suma de todos las calificaciones ponnderadas');

const promedio = sumAllNotesWithCredits / weight;

console.log('Promedio ponderado: '+ promedio);
