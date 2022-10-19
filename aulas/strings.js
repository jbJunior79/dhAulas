let frase = "sou programador js";

//lenght informa a cadeia do codigo
console.log(frase.length)

//indexOf informa onde está uma parte do código
console.log(frase.indexOf("js"))

//slice isola uma parte do codigo
console.log(frase.slice(4,16))

//trim remove espaços antes e depois
console.log(frase.trim())

//spli forma uma array a partir de uma string
console.log(frase.split(" "));

//replace troca uma palavra
console.log(frase.replace("js","html"))

let fraseModificada = frase.replace("js","html")
console.log(fraseModificada)