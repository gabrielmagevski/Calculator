
// criei uma função normal e passei o parametro name e dei um console.log antes de chamar uma callback na proxima linha
// depois chamei a callback com o parametro que defini antes "name()"
// depois coloquei um console.log para mostrar que a callback acabou.

function nameIs(name) {
    console.log('antes da callback');
  
    name()
  
    console.log('depois da callback');
  }
  
  // logo em seguida invoquei a função com o mesmo nome da função que criei em cima, como se fosse um "atalho"
  // passei uma arrow function " () => {} " como argumento e coloquei o console.log para mostrar uma callback;

nameIs(() => {
    console.log('estou em uma callback');
})


// testes

function elevate(up){
    console.log('vamos subir?');

    up()

    console.log('chegamos ao topo.');
}

elevate(() => {
    console.log('vamos, sim');
})



function santos(sabadou){
    console.log('Sabadou no só Santos?');

    sabadou()

    console.log('Como volta pra casa?');

}


santos(() => { console.log('LÓGICO!'); })


//criando um função construtora

//primeiro definir uma função normal e passei o parametro "name" em seguida criei uma const e definir
// uma NEW e o nome da função = new Person para deixa-la uma função construtora e em seguida passei um argumento 
// do tipo STRING. a partir do momento que eu estancio a função com NEW o retorno é do tipo Objeto

function Person (name) {
 this.name = name
 this.walk = function(){
     return this.name + ' está andando'
 }
}

// criei uma função para retornar o nome e uma string com qualquer texto
// estanciei o name + string com qualquer texto para criar uma frase

const gabriel2 = new Person("Gabriel");
const diogo = new Person("Diogo");

// chamei a variavel que criei e chamei a propriedade com um "." WALK 
// que criei.

console.log(gabriel2.walk());
console.log(diogo.walk());


// Function construtora
function Sextou(name, drinks, value){
    this.name = name
    this.drinks = drinks
    this.value = value

    this.function = function(){
        return this.name + ' vai beber uma ' + this.drinks + ' que está no valor de: ' + this.value
    }
}


const luskinha = new Sextou ('luskinha', 'Petra', 6.00);
const gabriel = new Sextou ('Gabriel', 'Heineken', 10.00);
const big = new Sextou ('Big', 'Brahma', 5.00);
const brayan = new Sextou ('Brayan', 'skol', 7.00);


// console.logs()

console.log(gabriel.function());
console.log(luskinha.function());
console.log(big.function());
console.log(brayan.function());


//Callback
function Uber(uber){
    console.log('o Uber cancelou? então vamos ter que ir de 99');

    uber();

    console.log('A melhor então');
}


Uber(() => { console.log('Mentira, um aceitou de volta.') });


   // Functions UDEMY 

   function Data(){
    return new Date().getDay()
}

console.log(Data())


