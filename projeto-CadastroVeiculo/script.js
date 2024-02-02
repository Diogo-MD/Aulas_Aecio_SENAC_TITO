/*
#Parte 1:
    - Crie uma classe Veiculo
    - Adicione as propriedades: marca, modelo, preco, cor, autonomia, capacidadeTanque, imagemURL
    - Adicione um metodo calcularDistanciaMaxia, que retornará a autonomia * capacidadeTanque
    - Adicione um metodo exibirDetalhes, que retornará os dados concatenados de:
        * marca, modelo, cor, preco.toFixed(2)

    #Parte 2:
        - Crie uma função cadastrarVeiculo
*/

class veiculo {
    constructor(marca, modelo, preco, cor, autonomia, capacidadeTanque, imagemURL) {
        this.marca = marca;
        this.modelo = modelo;
        this.preco = preco;
        this.cor = cor;
        this.autonomia = autonomia;
        this.capacidadeTanque = capacidadeTanque;
        this.imagemURL = imagemURL;
    }

    calcularDistanciaMaxima() {
        distanciaMaxima = this.autonomia * this.capacidadeTanque;
        return distanciaMaxima;
    }

    exibirDetalhes() {
        return `${this.marca} - ${this.modelo} - ${this.cor} - R$ ${this.preco.tofixed(2)} - ${this.calcularDistanciaMaxima()}`;
    }
}

const veiculos = [];

// Função para cadastrar veículo
function cadastrarVeiculo() {
    // Recebimento de valores do HTML
    const marca = document.getElementById("marca").value;
    const modelo = document.getElementById("modelo").value;
    const preco = document.getElementById("preco").value;
    const cor = document.getElementById("cor").value;
    const autonomia = document.getElementById("autonomia").value;
    const capacidadeTanque = document.getElementById("capacidadeTanque").value;
    const imagemURL = document.getElementById("imagem").value;

    // Instanciar a um novo objeto, passando os valores pedidos no construtor
    const Veiculo = new veiculo();
}

// veiculos.push(new veiculo("Fiat", "Uno", 60000, "Branco", 16,90,"www.url.com"));
// veiculos.push(new veiculo("fiat", "palio", 90000, "vermelho", 14, 90, "www.url88.com"));
// veiculos.push(new veiculo("chrevrolet", "cruze", 120000, "amarelo", 11, 90, "www.url.com"));

// console.log(veiculos)
