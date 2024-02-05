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

    sacar(valorSaque) {
        return true;
    }

    depositar(valorDeposito) {
        return true;
    }

    transferir(valorTransferencia, cliente) {
        return true;
    }
}

class ContaCorrente {
    constructor(cliente, numero, saldo, limiteChequeEspecial) {
        super(cliente, numero, saldo);
        this.limiteChequeEspecial = limiteChequeEspecial;
    }

    sacar(valorSaque) {
        super(valorSaque);
        return true;
    }
}

class ContaPoupanca {
    constructor(cliente, numero, saldo, taxaRendimento) {
        super(cliente, numero, saldo);
        this.taxaDeRendimento = taxaRendimento;
    }

    aplicarRendimento() {

    }
}

