// function createPhrases() {
//   console.log('Estudar é bom');
//   console.log('Isso ai');
//   console.log('CONTINUE FIRME!');
// }

// createPhrases();

// console.log('Fim do programa');
// console.log('end total');

//estou criando uma função anônima e passando parâmetros e somando.
const sum = function(number1, number2){
  console.log(number1 + number2)
}

sum(2, 3); //estou executando a função e passando argumentos pelo ()

// criei uma função anonima e passei os parametros, depois coloquei uma variavel "total" e reatribuir a soma dos parametros e retornei o valor para a variavel "total".
const sum2 = function (number1, number2) {
  total = number1 + number2 
    return total
}

//criei 2 variaveis com os nomes dos parametros la em cima e coloquei em LET para poder sofrer alterações e passei os valores para poder ser atribuido, (nao faz diferença ela estando em cima nem em baixo. Mesmo o js sendo one-thread e inline para leitura de código)
let number1 = 23
let number2 = 50

//Aqui executei o total chamando a função com os parametros.
console.log(`o Total da soma de ${number1} e ${number2} é ${sum2(number1, number2)}`);


