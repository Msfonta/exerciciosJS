//4 – Peça ao usuário para digitar várias idades. Exiba quantas pessoas são maior de idade (18 anos) e quantas são menores.

let num1 = 17
let num2 = 18
let num3 = 19
let num4 = 16
let num5 = 21
const vlrMenos18 = []
const vlrMais18 = []

const idade = function (numero){
            if(numero >= 18) {
                console.log('Voce é maior de idade')
                vlrMais18.push(numero)
            }else{
                console.log('Voce é menor de idade')
                vlrMenos18.push(numero)
            }
    }

console.log(idade(num1))
console.log(idade(num2))
console.log(idade(num3))
console.log(idade(num4))
console.log(idade(num5))

console.log(`Idades acima de 18 anos ${vlrMais18}`)
console.log(`Idades abaixo de 18 anos ${vlrMenos18}`)

