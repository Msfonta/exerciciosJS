//3 – Peça ao usuário para digitar 5 números em uma caixa de texto. Verifique qual é o maior número e exiba-o.

let num1 = 2
let num2 = 4
let num3 = 6
let num4 = 11
let num5 = 10
let vlrMax = 0

    if(num1 > num2 && num1 > num3 && num1 > num4 && num1 > num5){
        vlrMax = num1
    }else if(num2 > num1 && num2 > num3 && num2 > num4 && num2 > num5){
        vlrMax = num2
    }else if(num3 > num1 && num3 > num2 && num3 > num4 && num3 > num5){
        vlrMax = num3
    }else if(num4 > num1 && num4 > num2 && num4 > num3 && num4 > num5){
        vlrMax = num4
    }else{
        vlrMax = num5
    }

    console.log(vlrMax)