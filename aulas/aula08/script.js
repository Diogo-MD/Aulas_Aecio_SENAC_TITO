class Produto {
    constructor(nome, peso, preco, vencimento) {
        this.nome = nome;
        this.peso = peso;
        this.preco = preco;
        this.vencimento = vencimento;
    }

    // Verifica se o valor inserido é maior ou igual a 2024
    verificarVencimento() {
        return !(parseInt(this.vencimento) >= 2024);
    }
}

let produtos = [];
let cadastrarNovoProduto = true;

while (cadastrarNovoProduto) {

    // Solicitar ao usuário os valores
    let nome = prompt("Informe o nome do produto");
    let peso = prompt("Informe o peso do produto");
    let preco = prompt("Informe o preço do produto");
    let vencimento = prompt("Informe o vencimento do produto");

    // Instância de um objeto a partir de uma classe
    let produto = new Produto(nome, peso, preco, vencimento);

    // Alerta caso o valor inserido no prompt seja menor que (2024)
    if (produto.verificarVencimento()) {
        alert("Você acabou de cadastrar um produto vencido!")
    }

    // Adiciona o produto na lista/array "produtos"
    produtos.push(produto);

    // Pergunta ao usuário se deseja cadastrar outro produto
    let resposta = prompt("Deseja cadastrar outro produto? (Digite 'sim' para continuar...)")
    cadastrarNovoProduto = (resposta.toLowerCase() === 'sim');
}

// Imprimir no console o resultado da lista e produtos inseridas pelo usuário
console.log("Lista de produtos: ", produtos)