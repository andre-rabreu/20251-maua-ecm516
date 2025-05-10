// var idade = 18
// console.log(`Oi, ${nome}`)

// if(idade >= 18) {
//     var nome = "André"
//     console.log(`Parabéns, ${nome}. Você pode dirigir.`)
// }

// const n1 = 3
// const n2 = '3'

// const n3 = n1 + n2
// console.log(n3)

// const n4 = n1 + Number(n2)
// console.log(n4)

// arrow function
// const triplo = n => 3 * n
// console.log(triplo(3))

// const nomes = ["Leo", "André", "Alexandre", "Durval", "Estevam", "Alex"]
// let nomes_a = []

// imperativa
// for(let i = 0; i < nomes.length; i++) {
//     if(nomes[i].startsWith("A") || nomes[i].startsWith("a")) {
//         nomes_a.push(nomes[i])
//     }
// }
// console.log(nomes_a)

// declarativa
// const resultante = nomes.filter(nome => nome.startsWith("A") || nome.startsWith("a"))
// console.log(resultante)

// imperativa
// let iniciais = []
// for(let i = 0; i < nomes.length; i++) {
//     iniciais.push(nomes[i].charAt(0))
// }
// console.log(iniciais)

// declarativa
// const resultante_iniciais = nomes.map(function(n) {
//     return n[0]
// })
// console.log(resultante_iniciais)

// const resultado = nomes.every(n => n.startsWith("A"))
// console.log(resultado)

// const valores = [1, 2, 3, 4]
// const soma = valores.reduce((ac, v) => ac + v, 0)
// console.log(soma)

// let funcao = function() {
//     console.log("Teste")
// }
// funcao()

// function f(funcao) {
//     return funcao()
// }
// f(function(s) {s = "Teste"; console.log(s)})

// function g() {
//     function h() {
//         return n => 1
//     }
//     return h
// }

// console.log(f(g()()))

// const result = g()
// result()

// f(g())

// g()()

// function f() {
//     let nome = "André"
//     function g() {
//         console.log(nome)
//     }
//     g()
// }
// f()

// function ola() {
//     let nome = "André"
//     return function() {
//         console.log(`Olá, ${nome}`)
//     }
// }
// ola()()

// const saudacaoFactory = (saudacao, nome) => () => {console.log(`${saudacao}, ${nome}`)}
// const saudacaoFactory = (saudacao, nome) => {return () => {}}
// const saudacaoFactory = function(saudacao, nome) {
//     let b
//     return function() {
//         console.log(`${saudacao}, ${nome}`)
//     }
// }

// const olaAndre = saudacaoFactory("Olá", "André")
// olaAndre()
// const tchauAndre = saudacaoFactory("Flw",  "André")
// tchauAndre()

// function eAgora() {
//     let cont = 1
//     function f1() {
//         console.log(cont)
//     }
//     cont++
//     function f2() {
//         console.log(cont)
//     }
//     return {f1, f2}
// }
// eAgora().f1()
// eAgora().f2()

const pessoa = {
    nome: "André",
    idade: 21,
    'endereco da pessoa': {
        logradouro: "Rua Tito Oliani",
        numero: 766,
        bairro: {
            nome: "São João Clímaco"
        },
        cidade: {
            nome: "São Paulo",
            populacao: 10000000
        }
    }
}
// console.log(pessoa.nome)
// console.log(pessoa["endereco da pessoa"]["cidade"]["nome"])

const concessonaria = {
    cnpj: 1234567890,
    endereco: {
        logradouro: "Rua abc",
        numero: 123,
        bairro: {
            nome: "xyz"
        },
        cidade: {
            nome: "São Paulo",
            populacao: 123
        }
    },
    veiculos: [
        {
            marca: "Ford",
            modelo: "Fiesta",
            fabricacao: 2013
        },
        {
            marca: "Volkswagen",
            modelo: "Fusca",
            fabricacao: 1980
        },
        {
            marca: "Chevrolet",
            modelo: "Tracker",
            fabricacao: 2025
        }
    ]
}
// console.log(concessonaria.veiculos[0].modelo)

// for (let i = 0; i < concessonaria.veiculos.length; i++) {
//     console.log(concessonaria.veiculos[i].modelo)
// }

// for (let veiculo of concessonaria.veiculos) {
//     console.log(veiculo)
// }

const calculadora = {
    soma: function(a, b) {
        return a + b
    },
    subtracao: (a, b) => a - b
}
// console.log(calculadora.soma(1, 2))
// console.log(calculadora.subtracao(4, 3))

// const _calculadora = calculadora
// console.log(_calculadora.soma(5, 6))

const fs = require('fs')
const abrirArquivo = function(nomeArquivo) {
    const exibirConteudo = function(erro, conteudo) {
        if(erro) {
            console.log(`Deu erro: ${erro}`)
        }
        else {
            console.log(`Funcionou: ${conteudo.toString()}`)
            const dobro = Number(conteudo.toString()) * 2
            const finaliazr = (erro) => {
                if(erro) {
                    console.log(`A escrita deu erro: ${erro}`)
                }
                else {
                    console.log("A escrita funcionou")
                }
                fs.writeFile("dobro.txt", dobro.toString(), finalizar)
            }
        }
    } //callback
    fs.readFile(nomeArquivo, exibirConteudo)
    console.log("Fim da função 'exibirConteudo'")
}
abrirArquivo("arquivo.txt")