class conta {
    constructor(numero, saldo = 0,) {
        this.numero = numero;
        this.saldo = saldo;
    }

    sacar(valor) {
        if (this.saldo >= valor && valor > 0) {
            this.saldo - valor;
            return true; // Saque realizado com sucesso
        } else {
            return false; // Saldo insuficiente ou valor inválido
        }
    }

    depositar(valor) {
        if (valor > 0) {
            this.saldo + valor;
            return true; // Depósito realizado com sucesso
        } else {
            return false; // Digite um valor válido
        }
    }
}

class contaCorrente extends conta {
    constructor(numero, saldo, limiteChequeEspecial) {
        super(numero, saldo);
        this.limiteChequeEspecial = limiteChequeEspecial
    }
}

class contaPoupanca extends conta {
    constructor(numero, saldo, taxaRendimento) {
        super(numero, saldo)
        this.taxaRendimento = taxaRendimento
    }
}