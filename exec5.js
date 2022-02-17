//Crie um programa que entre com os dados de altura e sexo de 5 pessoas. Imprima na tela quantas pessoas são do sexo masculino e quantas pessoas são do sexo feminino. 
//Mostre também qual é a maior altura e se essa altura é de um homem ou uma mulher.
const pessoas = [
    {
        nome: 'Alison',
        sexo: 'M',
        altura: 190
    },
    {
        nome: 'Luan',
        sexo: 'M',
        altura: 177
    },
    {
        nome: 'Patricia',
        sexo: 'F',
        altura: 180
    }
]


let sexoM = 0;
let sexoF = 0;
let maiorAltura = 0;
let nomePessoaMaior = '';
let sexoMaiorAltura = '';

const listaSexoEAltura = function (pessoas) {
    let alturaAUX = 0;
    for (let i = 0; i < pessoas.length; i++) {
        if (pessoas[i].sexo == 'M') {
            sexoM++
        } else {
            sexoF++
        }
        alturaAUX = pessoas[i].altura 
        if(alturaAUX > maiorAltura){
            maiorAltura = alturaAUX
            nomePessoaMaior = pessoas[i].nome
            sexoMaiorAltura = pessoas[i].sexo
        }
    }
    pessoas.forEach(pessoa => {
        if (pessoa.sexo == 'M') {
            sexoM++
        } else {
            sexoF++
        }
        alturaAUX = pessoa.altura 
        if(alturaAUX > maiorAltura){
            maiorAltura = alturaAUX
            nomePessoaMaior = pessoa.nome
            sexoMaiorAltura = pessoa.sexo
        }
    });
    console.log(`A maior altura: ${maiorAltura}, é do ${nomePessoaMaior} cujo sexo é ${sexoMaiorAltura} `)
}
listaSexoEAltura(pessoas)