// Crie a const para a frase aqui

//a)
const frase = (`Jorge tem uma casa verde e com portão azul, com os dizeres: "BOAS VINDAS, mas não deixe o gato sair."`)
console.log (frase)

//b)
const novafrasetrocando = frase.replace("verde","rosa").replace("azul","laranja")
console.log (novafrasetrocando)

//c)
const fraseIncludesverde = novafrasetrocando.includes("verde") 
const fraseIncludeslaranja = novafrasetrocando.includes("laranja")

console.log (`A nova frase possui a palavra verde? ${fraseIncludesverde} 
A nova frase inclui a palavra laranja? ${fraseIncludeslaranja}`)


//**EXTRA**
let fraseExtra = (`mas não deixe o gato sair`)
console.log (fraseExtra.toUpperCase())
