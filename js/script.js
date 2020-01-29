console.log('Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età. Stampare a schermo attraverso il for in tutte le proprietà.');
var studObj = {
    'nome': 'Arthur',
    'cognome': 'Dent',
    'eta': 42
}

for (let data in studObj) {
    console.log(`${data}: ${studObj[data]}`);
}
// ***********
console.log('\n\n');
// ***********
console.log('Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome');
var studsObj = [
    {
        'nome': 'Mario',
        'cognome': 'Rossi',
        'eta': 23
    },
    {
        'nome': 'Luigi',
        'cognome': 'Verdi',
        'eta': 24
    },
    {
        'nome': 'Lara',
        'cognome': 'Croft',
        'eta': 25
    },
    {
        'nome': 'Solid',
        'cognome': 'Snake',
        'eta': 26
    },
    {
        'nome': 'Jack',
        'cognome': 'Ryan',
        'eta': 27
    }
]

for (let i = 0; i < studsObj.length; i++) {
    for (let data in studsObj[i]) {
        console.log(`${data}: ${studsObj[i][data]}`);
    }
}
// ***********
console.log('\n\n');
// ***********
console.log('Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.');
var nome = prompt('Inserisci Nome:');
var cognome = prompt('Inserisci Cognome:');
var eta = prompt('Inserisci Età:');

while (nome.length != 0 && cognome.length != 0 && eta.length != 0 && isNaN(eta)) {
    alert('Dati inseriti non validi. Inserisci i dati corretti.');
    nome = prompt('Inserisci Nome:');
    cognome = prompt('Inserisci Cognome:');
    eta = prompt('Inserisci Età:');
}

studsObj.push({
    'nome': nome,
    'cognome': cognome,
    'eta': eta
});

for (let i = 0; i < studsObj.length; i++) {
    for (let data in studsObj[i]) {
        console.log(`${data}: ${studsObj[i][data]}`);
    }
}
