const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      "

const minhaString1 = (minhaString.trim())
console.log (minhaString1)

const minhaString2 = (minhaString.length)
const minhaString3 = (minhaString1.length)

console.log (`A quantidade de caracteres antes da remoção dos espaços é : ${minhaString2}
A quantidade de caracteres depois da remoçãi dos espaços é : ${minhaString3}`)  


const minhaString4 = minhaString1.replace("________","sticioso")
console.log (minhaString4)