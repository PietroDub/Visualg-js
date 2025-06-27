// O Visualg é um interpretador de algoritmos que permite simular códigos em pseudolinguagem.
// Ideal para aprendizado de lógica de programação.


// Tipos de variáveis no Visualg
var
   inteiroExemplo : inteiro // Armazena números inteiros (ex.: 1, 20, -5)
   realExemplo : real       // Armazena números reais (ex.: 1.5, 3.14)
   caractereExemplo : caractere // Armazena um caractere (ex.: 'A')
   logicoExemplo : logico    // Armazena valores lógicos (verdadeiro ou falso)


// Condicional SE, SENAO, FIMSE
algoritmo "exemplo_se"
var
   numero : inteiro
inicio
   escreva("Digite um número: ")
   leia(numero)
   se numero > 0 entao
      escreval("Número positivo")
   senao
      escreval("Número negativo ou zero")
   fimse
fimalgoritmo


// Escolha…Caso
algoritmo "exemplo_caso"
var
   opcao : inteiro
inicio
   escreval("1 - Iniciar")
   escreval("2 - Carregar")
   escreval("3 - Sair")
   leia(opcao)
   
   escolha opcao
      caso 1
         escreval("Iniciando...")
      caso 2
         escreval("Carregando...")
      caso 3
         escreval("Saindo...")
      outrocaso
         escreval("Opção inválida")
   fimescolha
fimalgoritmo


// Enquanto…Faca
algoritmo "exemplo_enquanto"
var
   contador : inteiro
inicio
   contador <- 1
   enquanto contador <= 5 faca
      escreval("Contador: ", contador)
      contador <- contador + 1
   fimenquanto
fimalgoritmo


// Para…Faca
algoritmo "exemplo_para"
var
   i : inteiro
inicio
   para i de 1 ate 5 faca
      escreval("Valor de i: ", i)
   fimpara
fimalgoritmo


// Repita…Ate
algoritmo "exemplo_repita"
var
   senha : inteiro
inicio
   repita
      escreva("Digite a senha (1234): ")
      leia(senha)
   ate senha = 1234
   escreval("Acesso permitido")
fimalgoritmo


// Vetores (Arrays Unidimensionais)
algoritmo "exemplo_vetor"
var
   notas : vetor[1..5] de real
   i : inteiro
inicio
   para i de 1 ate 5 faca
      escreva("Digite a nota ", i, ": ")
      leia(notas[i])
   fimpara
   
   para i de 1 ate 5 faca
      escreval("Nota ", i, ": ", notas[i])
   fimpara
fimalgoritmo


// Matriz (Arrays Bidimensionais)
var
   matriz: vetor[1..2, 1..3] de inteiro

inicio
   matriz[1,1] <- 10
   matriz[1,2] <- 20
   matriz[1,3] <- 30
   matriz[2,1] <- 40
   matriz[2,2] <- 50
   matriz[2,3] <- 60

   escreval(matriz[2,3]) // Exibe 60
fimalgoritmo


algoritmo "exemplo_matriz"
var
   matriz : vetor[1..2, 1..3] de inteiro
   i, j : inteiro
inicio
   para i de 1 ate 2 faca
      para j de 1 ate 3 faca
         escreva("Digite o valor da posição [",i,",",j,"]: ")
         leia(matriz[i, j])
      fimpara
   fimpara

   escreval("Exibindo a matriz:")
   para i de 1 ate 2 faca
      para j de 1 ate 3 faca
         escreva(matriz[i, j], " ")
      fimpara
      escreval("")
   fimpara
fimalgoritmo


// Registro (Struct)
algoritmo "exemplo_registro"
type
   aluno = registro
      nome : caractere
      idade : inteiro
      nota : real
   fimregistro
var
   a : aluno
inicio
   escreva("Digite o nome: ")
   leia(a.nome)
   escreva("Digite a idade: ")
   leia(a.idade)
   escreva("Digite a nota: ")
   leia(a.nota)
   
   escreval("Dados do aluno:")
   escreval("Nome: ", a.nome)
   escreval("Idade: ", a.idade)
   escreval("Nota: ", a.nota)
fimalgoritmo


// Procedimento
procedimento mensagem()
inicio
   escreval("Bem-vindo ao Visualg!")
fimprocedimento

algoritmo "exemplo_procedimento"
inicio
   mensagem()
fimalgoritmo


// Função
funcao somar(a, b : inteiro) : inteiro
inicio
   somar <- a + b
fimfuncao

algoritmo "exemplo_funcao"
var
   resultado : inteiro
inicio
   resultado <- somar(5, 7)
   escreval("Soma = ", resultado)
fimalgoritmo


// ✅ Resumo da Sequência
// ✔ Introdução
// ✔ Variáveis
// ✔ Condicionais (Se, Escolha)
// ✔ Laços (Enquanto, Para, Repita)
// ✔ Vetores
// ✔ Matrizes
// ✔ Registro
// ✔ Funções e Procedimentos
