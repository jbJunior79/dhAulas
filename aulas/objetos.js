let pais = {
    nome: "Brasil",
    capital: "Brasília",
    dizerNacionalidade: function() {
        return "nasci no " + this.nome;
    }
};

console.log(pais.dizerNacionalidade())

let carro ={
    marca: "Fiat",
    modelo: "Uno",
}

function Carro(valorMarca, valorModelo) {
    this.marca =  valorMarca;
    this.modelo = valorModelo;
}

console.log(carro);
console.log(new Carro("Renault", "Logan"));