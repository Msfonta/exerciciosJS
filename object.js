const prod1 = {
    nome: 'Marc',
    sobrenome: 'Senna',
    familia: 'Aruaceiros',
}
prod1.classe = 'Humana'

function Obj(nome) {
    this.nome = nome
}

const obj2 = new Obj('Mesa')
console.log(obj2.nome)

let valor = 0;
console.log(valor++)
console.log(valor)
console.log(++valor)

