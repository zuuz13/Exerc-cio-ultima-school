// const leiaEntrada = require("readline");

// const lendo = leiaEntrada.createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });

// lendo.question("QUAL SEU NOME? ", function (answer) {
//     console.log(`O seu nome ${answer}`);
// });
var resultado
for (let conta = 1; conta <= 10; conta++) {
    resultado = conta * 2
    console.log('Tabuada de 2 ='
        + conta + ' * 2 = ' + resultado)
}