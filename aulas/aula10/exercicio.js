//modifique a classe pessoa, adicionando a ela o parametro "anoNascimento"
//crie uma função que informa se a pessoa é adulta "ehAdulto", deve receber um ano como parametro 
//e retornar verdadeiro ou falso

class Pessoa {
    constructor(nome, anoNascimento) {
        this.nome = nome;
        this.anoNascimento = anoNascimento;
    }

    seApresentar(pessoa) {
        console.log(`Olá, meu nome é ${this.nome}`);
        pessoa.conhecer(this);
    }

    conhecer() {
        console.log(`Prazer em conhece-lo ${pessoa.nome}, meu nome é ${this.nome}`);
    }

    ehAdulto(ano) {
        let adulto = ano - this.anoNascimento > 10;
        let idadePositiva = ano - this.anoNascimento >= 0;

        if (adulto) {
            return true;
        } else if (!adulto && idadePositiva) {
            return false;
        }

        alert("Pessoa não era nascida nesse ano!")
    }
}

const pessoaA = new Pessoa("Fulano", 2000);
const pessoaB = new Pessoa("Beltrano", 2012);

//pessoaA.seApresentar(pessoaB)
console.log(pessoaA.ehAdulto(1997));
console.log(new Date.getFullYear());