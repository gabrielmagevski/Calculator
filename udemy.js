//Switch = mudar, case = caso, break = pausar, default = default;
/*
 No caso o default seria igual o (Else do if/else)

 switch compara valores e tipos;

 sintax do Switch é á seguinte. 

==============================================

let parametro = ""

    Switch (parametro) {
        case 0:   <=== pode ser um number or uma "string"
            parametro = "segunda"
            break
        default: 
           parametro = " --- "
    }

    console.log(`${paramero}`);
    
===============================================
*/

// LOOPINGS:  FOR, WHILE E DO WHILE


let numero = prompt("Digite um número");
let i = 0

    while(i <= 10) {
        document.write(`${numero} x ${i} = ${( i * numero )}`)
        indice++
    }

 /* prompt (so pega no html) ele vai aparecer para a pessoa digitar
    um número ou uma palavra, vai oque estiver definido

    document.write ele vai escrever na tela 
    (document = DOM; Write = escrever...)
*/   

    for(j = 0; j <= 10; j++){
      document.write(`${numero} x ${i} = ${( i * numero )}`)
    }

 /* 
    A diferença do While pro For é que no
    
        While passamos no parametro
        apenas a condição até ficar true para sair do loop e depois
        definimos tudo dentro de chaves;

    Já no For a gente passa tudo no parametro e defini apenas a ação;
    ex:

        for(variavel = 0; variavel <= 10; variavel++){
            document.write(`${numero} x ${variavel} = ${( variavel * numero )}`)
        } 
*/

  do {
    document.write(`${numero} x ${contador} = ${( numero * contador )}`)
  }
   while(contador <= 10)


