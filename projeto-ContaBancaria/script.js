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
        if (valorSaque <= this.saldo && valorSaque > 0) {
            console.log();
            return true;
        }
    }

    depositar(valorDeposito) {
        //se o valor for maior que zero, soma o valor ao saldo
        if (valorDeposito > 0) {
            this.saldo += valorDeposito;
            return true;
        }
    }

    transferir(valorTransferencia, conta) {
        //se consigo sacar dessa conta
        //posso depositar na conta destino
        if (this.sacar(valorTransferencia)) {
            conta.depositar(valorTransferencia)
            return true;
        }
    }
}

class ContaCorrente extends Conta {
    constructor(cliente, numero, saldo, limiteChequeEspecial) {
        super(cliente, numero, saldo);
        this.limiteChequeEspecial = limiteChequeEspecial;
    }

    sacar(valorSaque) {
        /*
        Somar o valor do cheque especial ao valor do saldo
        verificar se pode sacar comm base nessa soma
        */
        let saldoComLimite = this.saldo + this.limiteChequeEspecial;

        if (valorSaque <= saldoComLimite) {
            return super.sacar(valorSaque);
        }
    }
}

class ContaPoupanca extends Conta {
    constructor(cliente, numero, saldo, taxaRendimento) {
        super(cliente, numero, saldo);
        this.taxaDeRendimento = taxaRendimento;
    }

    aplicarRendimento() {
        // Rendimento = valor do saldo multiplicado com a porcentagem de taxa de rendimento
        this.saldo += this.saldo * this.taxaDeRendimento;
    }
}

let contas = [];
let clientes = [];

let clienteA = new Cliente("Fulano", "1234567890");
clientes.push(clienteA);

let clienteB = new Cliente("Beltrano", "0987654321");
clientes.push(clienteB);

let contaX = new ContaCorrente(clienteA, 123, 100, 150);
contas.push(contaX);

let contaY = new ContaPoupanca(clienteB, 111, 100, 0.01);
contas.push(contaY);

contaY.transferir(50, contaX);

console.log("Conta Y: ", contaY);
console.log("Conta X: ", contaX);