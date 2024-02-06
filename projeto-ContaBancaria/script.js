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
        /* 
        Verificar se o saldo é maior ou igual ao valor
         e verificar se o valor é maior que 0
        retornar true em caso de sucesso, false caso não
        */
        if (valorSaque >= this.saldo && valorSaque > 0) {
            console.log();
            return true;
        } else {
            return false;
        }
    }

    depositar(valorDeposito) {
        //se o valor for maior que zero, soma o valor ao saldo
        if (valorDeposito > 0) {
            this.saldo += valorDeposito;
            return true;
        } else {
            return false;
        }
    }

    transferir(valorTransferencia, conta) {
        /* 
        se consigo sacar dessa conta
        posso depositar na conta destino
        */
        if (valorTransferencia <= this.saldo && valorTransferencia > 0) {
            this.saldo -= valorTransferencia;
            conta += valorTransferencia;
            return true;
        } else {
            return false;
        }
    }
}

class ContaCorrente extends Conta {
    constructor(cliente, numero, saldo, limiteChequeEspecial) {
        super(cliente, numero, saldo);
        this.limiteChequeEspecial = limiteChequeEspecial;
    }

    sacar(valorSaque) {
        super.sacar(valorSaque);
        return true;
    }
}

class ContaPoupanca extends Conta {
    constructor(cliente, numero, saldo, taxaRendimento) {
        super(cliente, numero, saldo);
        this.taxaDeRendimento = taxaRendimento;
    }

    aplicarRendimento() {

    }
}

let contas = [];
let clientes = [];

