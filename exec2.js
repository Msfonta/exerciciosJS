//2 – Faça um programa que entre com cinco números e imprima o quadrado de cada número.
let num1 = 2
let num2 = 4
let num3 = 6
let num4 = 5
let num5 = 10

const aoQuadrado = [2, 4, 6, 5, 10]
//valor ao quadrado por arrowFunction
const quadrado = (numero) => {
    return numero * numero
}

// valor ao quadrado por forEach
const valorAoQuadrado = () => {
    let arrayNovo = []
    aoQuadrado.forEach(quadra => {
        arrayNovo.push(quadra * quadra)
    })
    return arrayNovo
}

console.log(quadrado(num1))
console.log(quadrado(num2))
console.log(quadrado(num3))
console.log(quadrado(num4))
console.log(quadrado(num5))

console.log('array novo:',valorAoQuadrado())

