var garble = require("./hello");

// Index 2 holds the first actual command-line argument
var argument = process.argv[2];

console.log(garble(argument));
