let nome 
let  idade 
console.log(typeof nome, typeof idade)
//typeof diz qual o tipo da variável

//porque eu não declarei o tipo
nome = prompt('Qual o seu nome?')
// O prompt abre uma janela na página do chrome

idade = Number (prompt('Qual a sua idade?'))
 // passou de string para number

console.log(typeof nome, typeof idade)
//porque eu adicionei um valor do tipo string

console.log(`Olá ${nome}, você tem ${idade} anos.`)

// este commit é um teste