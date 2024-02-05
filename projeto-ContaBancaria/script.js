/*
    Ordem para fazer uma boa estrutura orientação a objetos

    1º Fazer a etrutura de classe básica

    2º Definir as relações entre as classes

    3º Determinar os constructors e supers
*/

class Cliente {
    constructor(nome, cpf) {
        this.nome = nome;
        this.cpf = cpf;
    }
}

class Conta {
    constructor(cliente, numero, saldo) {
        this.cliente = cliente;
        this.numero = numero;
        this.saldo = saldo;
    }
}

class ContaCorrente {
    constructor(cliente, numero, saldo, limiteChequeEspecial) {
        super(cliente, numero, saldo);
        this.limiteChequeEspecial = limiteChequeEspecial;
    }
}

class ContaPoupanca {
    constructor(cliente, numero, saldo) {
        super(cliente, numero, saldo);
    }
}

