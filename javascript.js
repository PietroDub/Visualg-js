//O javascript é uma linguagem de programação versátil.

//Criação de variáveis no JS

var Nome = "valor";
let Nome = 10;
const Nome = true;

// Condicional If, else 

var idade = 16;

if (idade > 18) {
    console.log("Pode entrar!")
} else {
    console.log("Não pode entrar")
}

// Switch case

switch (expressao) {
  case valor1:
    // bloco de código se expressao === valor1
    break;
  case valor2:
    // bloco de código se expressao === valor2
    break;
  default:
    // bloco de código se nenhum caso for atendido
}

console.log("Loja legal")
console.log("1- Pocão de cura")
console.log("2- Poção de veneno")
console.log("3- Poção de água")

let escolha = parseInt(prompt("Digite para comprar 1 a 3"))

switch(escolha) {
    case 1:
        console.log("Poção curou")
    break;
    case 2:
        console.log("Poção envenenou!")
    break;
    case 3:
        console.log("Águinha...")
    break;
  default:
    console.log("Inválido")
}

//While

let contador = 0

while (contador <= 5){
    console.log($`Contador: ${contador}`)
    contador++
}

//for
let fim = 5;

for (let i = inicio; i <= fim; i++){
    console.log($`Valor de i: ${i}`)
}

//Do...While

let senha = 1234

do {
    console.log("Digite a senha:")
    let digite = parseInt(prompt("Digite..."))
} while (senha != digite);

// Vetores (Arrays Unidimensionais)

