var numero1 = 10
var numero2 = 25
var numeroAuxiliar = numero1

console.log('O valor inicial de a é: ' + numero1)
console.log('O valor inicial de b é: ' + numero2)

numero1 = numero2
numero2 = numeroAuxiliar
/*esta variável serve para guardar o valor da variavel numero1
Pra que seja possivel fazer a troca sem que o valor dela se perca
*/

console.log('Agora o valor de a é: ' + numero1)
console.log('Agora o valor de b é: ' + numero2)