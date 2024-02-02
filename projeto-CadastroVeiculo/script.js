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

class Veiculo {
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
    const preco = parseFloat(document.getElementById("preco").value);
    const cor = document.getElementById("cor").value;
    const autonomia = parseInt(document.getElementById("autonomia").value);
    const capacidadeTanque = parseInt(document.getElementById("capacidadeTanque").value);
    const imagemURL = document.getElementById("imagemURL").value;

    // Instanciar a um novo objeto, passando os valores pedidos no construtor
    const Veiculo = new Veiculo(marca, modelo, preco, cor, autonomia, capacidadeTanque, imagemURL);

    // Adicionar veículo a lista """Banco de dados"""
    veiculos.push(Veiculo)

    // Atualiza a exibição
    exibirVeiculos();

    // Limpa os campos do formulário
    document.getElementById("veiculoForm").reset();
}

function exibirVeiculos() {
    const veiculosList = document.getElementById("veiculosList");

    // Limpar a lista antes de exibir os veículos
    veiculosList.innerHTML = "";

    for (let i = 0; i < veiculos.length; i++) {
        const veiculoItem = document.createElement("li");
        const veiculoCard = criarVeiculoCard(veiculos[i]);
        veiculosList.appendChild(veiculoCard);
        veiculosList.appendChild(veiculoItem);
    }
}

function criarVeiculoCard(Veiculo) {
    const veiculoCard = document.createElement("div");
    veiculoCard.className = "veiculo-card";

    const imagemVeiculo = document.createElement("img");
    imagemVeiculo.src = Veiculo.imagemURL;
    imagemVeiculo.className = "veiculo-imagem"
    imagemVeiculo.alt = `${Veiculo.marca} ${Veiculo.modelo}`;
    veiculoCard.appendChild(imagemVeiculo);

    const detalhesVeiculo = document.createElement("div");
    detalhesVeiculo.textContent = Veiculo.exibirDetalhes() + ` - Distância máxima: ${Veiculo.calcularDistanciaMaxima()} km`;
    veiculoCard.appendChild(detalhesVeiculo);

    return veiculoCard;
}