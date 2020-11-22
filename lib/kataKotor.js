const sastrawi = require('sastrawijs');

const kataKasar = [
    'wasu',
    'titid',
    'pepek',
    'ngentot',
    'ngtod',
    'ngentod',
    'kentu',
    'anjeng',
    'jingan',
    'bajingan',
    'Memek',
    'Kontl',
    'Kntol',
    'Kntl',
    'Anjing',
    'Asu',
    'Inu',
    'ochinchin',
    'cok',
    'cokk',
    'jancok',
    'cuk',
    'jancuk',
    'picek',
    'pece',
    'gatel',
    'gatl',
    'gtel',
    'matamu',
    'matamuu',
    'mmek',
    'mmk',
    'cukk',
    //Tambahin Sendiri
];

const inArray = (needle, haystack) => {
    let length = haystack.length;
    for(let i = 0; i < length; i++) {
        if(haystack[i] == needle) return true;
    }
    return false;
}

module.exports = cariKasar = (kata) => new Promise((resolve) => {
    let sentence = kata;
    let stemmer = new sastrawi.Stemmer();
    let tokenizer = new sastrawi.Tokenizer();
    let words = tokenizer.tokenize(sentence);
    for (word of words) {
        if(inArray(stemmer.stem(word), kataKasar)){
            resolve(true)
        }
    }
    resolve(false)
})
