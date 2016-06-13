var start = require('./start');
var unique = require('uniq');

// Usando el paquete de npm
var data = [1, 2, 3, 4, 5, 5, 6, 6];
console.log(unique(data));

// Usando nuestro archivo local
var y = start(3);
console.log('N: ' + y);