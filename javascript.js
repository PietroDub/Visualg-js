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

let array = [1,2,3,4,5]

let notas = []

for (let i = 1; i <= 5; i++){
    let nota = parseFloat(prompt(`Digite a nota ${i}:`));
    notas[i] = nota; // Usando índice começando em 1, como no Visualg
}

for (let i = 1; i <= 5; i++){
    console.log(`A nota ${i}: ${notas[i]}`)
}

// Matriz (Arrays Bidimensionais)

// Criando uma matriz 2x3 (2 linhas, 3 colunas)
let matriz1 = [
    [10, 20, 30], // linha 0
    [40, 50, 60]  // linha 1
];

// Acessando um elemento
console.log(matriz1[1][2]); // Exibe 60


let matriz = [];

// Preenchendo a matriz com 2 linhas e 3 colunas
for (let i = 0; i < 2; i++) {
    matriz[i] = []; // Inicializa a linha
    for (let j = 0; j < 3; j++) {
        matriz[i][j] = parseInt(prompt(`Digite o valor para [${i}][${j}]:`));
    }
}

// Exibindo a matriz
for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 3; j++) {
        console.log(`matriz[${i}][${j}] = ${matriz[i][j]}`);
    }
}


//Registro

let aluno = {
    nome: "Maria",
    idade: 19,
    nota: 9.5,
};

console.log(aluno.idade)
console.log(aluno.idade)
console.log(aluno.nota)


//Procedimento/funcao

let n1 = prompt(`Digite um número:`)
let n2 = prompt(`Digite outro número:`)
function somar(){
    return console.log(`A soma de ambos= ${n1 + n1}`)
}
