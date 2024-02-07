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
        if (this.saldo >= valorSaque && valorSaque > 0) {
            this.saldo -= valorSaque;
            return true;
        }
        return false;
    }

    depositar(valorDeposito) {
        if (valorDeposito > 0) {
            this.saldo += valorDeposito;
            return true;
        }
        return false;
    }

    transferir(valorTransferencia, contaDestino) {
        if (this.sacar(valorTransferencia)) {
            contaDestino.depositar(valorTransferencia)
            return true;
        }
        return false;
    }

    toString() {
        return `Numero: ${this.numero} - Saldo: ${this.saldo} - Cliente: ${this.cliente.nome}`
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
        this.taxaRendimento = taxaRendimento;
    }

    aplicarRendimento() {
        // Rendimento = valor do saldo multiplicado com a porcentagem de taxa de rendimento
        this.saldo += this.saldo * this.taxaRendimento;
    }
}

let contas = [];
let clientes = [];

function cadastrarCliente() {
    // Pegar dados da tela
    const nome = document.getElementById("nomeCliente").value;
    const cpf = document.getElementById("cpfCliente").value;

    // Instanciar um novo cliente
    const cliente = new Cliente(nome, cpf);

    // Adicionar este cliente a uma lista de cliente
    clientes.push(cliente);

    atualizarSeletorClientes();
    exibirClientes();

    document.getElementById("clienteForm").reset();
}

// Exibir clientes cadastrados
function exibirClientes() {
    const clientesList = document.getElementById("clientesList");
    // Limpar a lista antes de exibir os clientes
    clientesList.innerHTML = "";

    for (let i = 0; i < clientes.length; i++) {
        const clienteItem = document.createElement("li");
        clienteItem.textContent = `Nome: ${clientes[i].nome} - CPF: ${clientes[i].cpf}`;
        clientesList.appendChild(clienteItem);
    }
}

function atualizarSeletorClientes() {
    const seletorClientes = document.getElementById("cliente");

    seletorClientes.innerHTML = "";

    clientes.forEach(cliente => {
        const option = document.createElement("option");
        option.value = cliente.cpf;
        option.textContent = cliente.nome;
        seletorClientes.appendChild(option);
    });
}


function cadastrarConta() {
    // Pegar os dados da tela
    const numero = parseInt(document.getElementById("numero").value);
    const saldo = parseFloat(document.getElementById("saldo").value);
    const tipoConta = document.getElementById("tipoConta").value;

    // Identificar o cliente selecionado na lista de clientes
    const clienteSelecionado = document.getElementById("cliente").value;
    const cliente = clientes.find(c => c.cpf === clienteSelecionado);

    // Adicionar uma nova, a partir do tipo de conta selecionada
    // (Poderia ser feito com ELSE IF, porém com SWITCH fica mais semântico)

    let conta;
    switch (tipoConta) {
        case "ContaCorrente":
            conta = new ContaCorrente(cliente, numero, saldo, 100);
            break;
        case "ContaPoupanca":
            conta = new ContaPoupanca(cliente, numero, saldo, 100);
            break;
        default:
            alert("Tipo selecionado inválido");
            break;
    }

    contas.push(conta);

    exibirContas();

    document.getElementById("contaForm").reset();
}

function exibirContas() {
    const contasList = document.getElementById("contasList");
    // Limpar a lista antes de exibir as contas
    contasList.innerHTML = "";

    for (let i = 0; i < contas.length; i++) {
        const contaItem = document.createElement("li");
        const contaCard = criarContaCard(contas[i]);
        contasList.appendChild(contaCard);
        contasList.appendChild(contaItem);
    }
}

function criarContaCard(conta) {
    const contaCard = document.createElement("div");
    contaCard.className = "conta-card";

    const detalhesConta = document.createElement("div");
    detalhesConta.textContent = conta.toString();
    contaCard.appendChild(detalhesConta);

    return contaCard;
}