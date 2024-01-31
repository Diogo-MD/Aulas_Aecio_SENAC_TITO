class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }

    seApresentar(pessoa) {
        console.log(`Olá, meu nome é ${this.nome}`);
    }

    conhecer() {
        console.log(`Prazer em conhece-lo, meu nome é ${this.nome}`)
    }
}

const pessoaA = new Pessoa("Fulano");
const pessoaB = new Pessoa("Beltrano");

pessoaA.seApresentar();
pessoaB.conhecer();