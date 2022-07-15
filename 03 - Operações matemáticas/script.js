let numberOne = Number(prompt('Digite o primeiro número:'))
let numberTwo = Number(prompt('Digite o segundo número número:'))

const soma = numberOne + numberTwo
const subtracao = numberOne - numberTwo
const multiplicacao = numberOne * numberTwo
const divisao = numberOne / numberTwo
const resto = numberOne % numberTwo

alert(
  'A soma dos dois números é igual a: ' + soma +
  '\nA subtração dos dois números é igual a: ' + subtracao +
  '\nA multiplicação dos dois números é igual a: ' + multiplicacao +
  '\nA divisão dos dois números é igual a: ' + divisao +
  '\nO resto da divisao dos dois números é igual a: ' + resto
  )
