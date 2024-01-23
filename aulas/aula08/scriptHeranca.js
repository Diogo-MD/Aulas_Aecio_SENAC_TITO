class Pessoa { //Super Classe
    constructor(nome, idade, peso) {
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
    }

    andar() {
        console.log(nome + " andou!");
    }

    falar() {
        console.log(nome + " falou!");
    }
}

class Pacient extends Pessoa { // Sub Classe
    constructor(nome, idade, peso, sintoma, numeroAtendimento, altura){
        super(nome, idade, peso);
        this.sintoma = sintoma;
        this.numeroAtendimento = numeroAtendimento;
        this.altura = altura;
    }
}

class Medico extends Pessoa { // Sub Classe
    constructor(primeiroNome, quandoNasceu, quantoPesa, especialidade){
        super(nome, idade, peso);
        this.especialidade = especialidade;
    }
}