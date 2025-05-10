// const axios = require('axios')
// const q = 'Itu'
// const appId = ''
// const cnt = '2'
// const units = 'metric'
// const baseUrl = 'api.openweathermap.org/data/2.5/forecast'
// const lang = 'pt_br'
// const url = `https://${baseUrl}?q=${q}&appid=${appId}&cnt=${cnt}&units=${units}&lang=${lang}`
// console.log(url)

// axios.get(url)
//     .then((res) => {
//         console.log(res.data)
//         console.log("***************************************")
//         return res.data
//     })
//     .then(function (res) {
//         console.log(`cnt: ${res.cnt}`)
//         console.log("***************************************")
//         return res
//     })
//     .then(abc => {
//         console.log(`temp_min: ${abc.list[0].main.temp_min}`)
//         console.log("***************************************")
//         return { list: abc.list, city: abc.city }
//     })
//     .then((res) => {
//         for (let previsao of res.list) {
//             console.log(`${previsao['weather'][0]['description']}`)
//             console.log(`${previsao.main.feels_like}\u00B0`)
//             console.log("***************************************")
//         }
//         console.log(`Nascer do Sol: ${new Date(res['city']['sunrise'] * 1000).toLocaleTimeString()}`)
//         console.log(`Pôr do Sol: ${new Date(res['city']['sunset'] * 1000).toLocaleTimeString()}`)
//     })

// async/await
// async function async_hello(nome) {
//     return `Hello, ${nome}!`
// }
// async_hello('André').then(res => console.log(res))
// console.log('Fim...')

// síncrono
// function hello(nome) {
//     return `Hello, ${nome}!`
// }
// const res = hello('André')
// console.log(res)
// console.log('Fim...')

const fatorial = (n) => {
    if (n < 0) return Promise.reject('Apenas valores positivos')
    // return Promise.resolve(res)
    return new Promise((resolve, reject) => {
        let res = 1
        for (let i = 2; i <= n; i++) res *= i
        resolve(res)
    })
}
// console.log(fatorial)

// const comThenCatch = () => {
//     fatorial(4)
//         .then(res => console.log(`Resultado: ${res}`))
//         .catch(err => console.log(`Erro: ${err}`))

//     fatorial(-4)
//         .then(res => console.log(`Resultado: ${res}`))
//         .catch(err => console.log(`Erro: ${err}`))
// }
// comThenCatch()

const comAsyncAwait = async () => {
    try {
        const f1 = await fatorial(5)
        console.log(f1)
    }
    catch (err) {
        console.log(`Erro: ${err}`)
    }

    try {
        const f2 = await fatorial(-5)
        console.log(f2)
    }
    catch (err) {
        console.log(`Erro: ${err}`)
    }
}
comAsyncAwait()
