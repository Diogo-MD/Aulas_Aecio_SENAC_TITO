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

    toString() {
        return `Número: ${this.numero} - Saldo: ${this.saldo}`
    }
}

class contaCorrente extends conta {
    constructor(numero, saldo = 0, limiteChequeEspecial = 200) {
        super(numero, saldo);
        this.limiteChequeEspecial = limiteChequeEspecial
    }

    sacar (valor) {
        if (this.saldo >= valor + this.limiteChequeEspecial && valor > 0) {
            this.saldo - (valor + this.limiteChequeEspecial)
            return true; // Saque com valor de cheque especial feito com sucesso
        } else {
            return false; // Saldo insuficiente ou valor inválido
        }
    }

    
}

class contaPoupanca extends conta {
    constructor(numero, saldo = 0, taxaRendimento = 0.02) {
        super(numero, saldo);
        this.taxaRendimento = taxaRendimento;
    }
}

let contaCorr = new contaCorrente(1122);
let contaPoup = new contaPoupanca(2345);
console.log(contaCorr.toString());
console.log(contaPoup.toString());

console.log("Saque de 500 reais em cada")
contaCorr.sacar(200)
contapoup.sacar(200)
