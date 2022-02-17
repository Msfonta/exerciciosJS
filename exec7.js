//7 – Peça para o usuário digitar uma data. Exiba separadamente o dia, o mês e o ano. (Obs.: não necessita de laço de repetição)

let data = new Date()

let dia = data.getDay()
let mes = data.getMonth()
let ano = data.getFullYear()

console.log(data + 'dia: ' +  dia + 'mes: ' + mes + 'ano: ' + ano)

