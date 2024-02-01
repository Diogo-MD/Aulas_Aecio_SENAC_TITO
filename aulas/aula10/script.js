/*
Parte 1: Crie uma classe Personagem. O personagem deverá ter:
nome, vida, ataque, defesa, vivo (ou morto), posicao (numero inteiro)
lembre de criar o método construtor 

Parte 2: Crie a função/método morrer
    - propriedade "vivo" se torna false, e console.log("morreu")
Crie a função tomarDano
    - tomar dano recebe um parametro, que é o valor do dano
    - diminui os pontos de vida do personagem, com base no dano tomado
    - verifica, se o dano for maior que os pontos de vida, personagem morre
    - se os pontos de vida forem menor ou igual a zero, personagem morre
    - ao morrer, personagem continua com 0 pontos de vida
    - o personagem só pode tomar dano se estiver vivo

Crie a função atacar
    - atacar, recebe como parametro um personaem/inimigo
    - so pode atacar alguém com vida
    - exibe o console.log informando qual a força do ataque e inimigo atacado

Exercício:
    - Crie um limite de vida máxima para o personagem
    - Crie uma função de recuperar vida que recebe um total de pontos para recuperar
    - A recuperação de via não pode fazer o personaem ir além da vida máxima

Parte 3: Crie a herança
    - Crie as classes Arqueiro, Guerreiro e Mago
    - Todas as 3 classes herdam de personagem

Alterações do Guerreiro:
    - Acrescente a propriedade "escudo" na classe Guerreiro.
    - A função tomarDano do Guerreiro deve proteger seus pontos de vida,
    abatendo o dano sofrido dos pontos do seu escudo.    
    
    - Acrescente a sobrescrita da função atacar, verificando a posição do inimigo
    - Se o inimigo estiver a mais de 1 de distância, o guerreiro não pode atacar.

Alterações do Arqueiro:
    - O arqueiro só pode atacar se a distancia dele para o oponente for maior do que 3.
    - O arqueiro tem um totalDeFlechas.
    - O arqueiro só pode atacar se o totla de flechas for maior que 0

    - Crie a função recarregarFlecha, que recebe por parametro a quantidade a recarregar
    - A função deve retornar o total de flechas recarregadas.

    Alterações do Mago:
    - O mago precisa de pontos de magia para atacar.
    - Os pontos de magia do mago são inicalmente metade dos seus pontos de vida
    - Ao atacar, o mago gasta 2 pontos de magia.
    - Caso não haja mais pontos de magia, o mago perde 4 pontos de vida ao atacar.
*/

class Personagem {
    constructor(nome, ataque, defesa, vida, posicao, vivo = true) {
        this.nome = nome;
        this.ataque = ataque;
        this.defesa = defesa;
        this.posicao = posicao;
        this.vida = vida;
        this.vivo = vivo;
        this.vidaMaxima = vida;
    }

    morrer() {
        this.vivo = false;
        console.log(`O ${this.nome} morreu!`);
    }

    tomarDano(quantidade) {
        if (this.vivo) {
            this.vida = this.vida - quantidade;
            console.log(`${this.nome} sofreu ${quantidade} de dano, e agora tem ${this.vida} de vida`)

            if (this.vida <= 0) {
                this.vida = 0;
                this.morrer();
            }
        } else {
            console.log(`${this.nome} não pode mais sofrer dano!`);
        }
    }

    atacar(inimigo) {
        if (inimigo.vivo && this.vivo) {
            console.log(`${this.nome} atacou ${inimigo.nome} com força de ${this.ataque}`);
            inimigo.tomarDano(this.ataque);
        } else {
            console.log("Não é possível atacar na condição de morto!");
        }
    }

    recuperarVida(vidaRecebida, personagem = this) {
        personagem.vida += vidaRecebida;

        if (personagem.vida > personagem.vidaMaxima) {
            personagem.vida = personagem.vidaMaxima;
        }

        console.log(`${this.nome} recuperou a vida de ${personagem.nome} um total de ${vidaRecebida}, ficando com ${personagem.vida} de vida`);
    }


}

class Arqueiro extends Personagem {
    constructor(nome, ataque, defesa, vida, posicao, vivo = true, totalDeFlechas) {
        super(nome, ataque, defesa, vida, posicao, vivo);
        this.totalDeFlechas = totalDeFlechas;
    }

    atacar(inimigo) {
        if (this.totalDeFlechas > 0 && Math.abs(this.posicao - inimigo.posicao) > 3) {
            super.atacar(inimigo);
            this.totalDeFlechas -= 1;
        } else if (!(this.totalDeFlechas > 0) && Math.abs(this.posicao - inimigo.posicao) > 3) {
            console.log(`${this.nome} está sem flechas para atacar!`);
        } else if (this.totalDeFlechas > 0 && !(Math.abs(this.posicao - inimigo.posicao) > 3)) {
            console.log(`${this.nome} não pode atacar ${inimigo.nome} pois estão próximos ${this.posicao} - ${inimigo.posicao}`);
        }
    }

    recarregarFlecha(quantidade) {
        persoArqueiro.totalDeFlechas += quantidade
        return this.totalDeFlechas;
    }
}

class Guerreiro extends Personagem {
    constructor(nome, ataque, defesa, vida, posicao, vivo = true, escudo) {
        super(nome, ataque, defesa, vida, posicao, vivo,)
        this.escudo = escudo
    }
    tomarDano(quantidade) {
        console.log(`${this.nome} sofre dano de ${quantidade}, mas defendeu com ${this.escudo} de escudo`);
        if (quantidade > this.escudo) {
            quantidade = quantidade - this.escudo;
        } else {
            quantidade = 0
        }
        super.tomarDano(quantidade);
    }

    atacar(inimigo) {
        if (Math.abs(inimigo.posicao - this.posicao) < 2) {
            super.atacar(inimigo);
        } else {
            console.log(`${inimigo.nome} muito distante para ${this.nome} atacar.`)
        }
    }
}


class Mago extends Personagem {
    constructor(nome, ataque, defesa, vida, posicao, vivo = true, pontosDeMagia) {
        super(nome, ataque, defesa, vida, posicao, vivo);
        this.pontosDeMagia = (this.vida / 2)
    }

    atacar(inimigo) {
        distanciaPermitida = (Math.abs(this.posicao - inimigo.posicao) > 1 && Math.abs(this.posicao - inimigo.posicao) < 6);
        
        if (this.pontosDeMagia > 0 && distanciaPermitida) {
            super.atacar(inimigo);
            this.pontosDeMagia -= 2;
        } else if (!(this.pontosDeMagia > 0) && distanciaPermitida) {
            this.vida -= 4;
            console.log(`${this.nome} está sem pontos de magia para atacar e foi reduzido 4 de vida, e ficou com ${this.vida}`);
        } else if (this.pontosDeMagia > 0 && !distanciaPermitida) {
            console.log(`${this.nome} não pode atacar ${inimigo.nome} pois não estão nas posições permitidas ${this.posicao} - ${inimigo.posicao}`);
        }
    }
}

let persoGuerreiro = new Guerreiro("Aragorn", 10, 12, 100, 5, true, 5);
let persoMago = new Mago("Gendalf", 2, 9, 60, 10, true, 2);
let persoArqueiro = new Arqueiro("Legolas", 18, 9, 60, 15, true, 2);
let persoArqueiro2 = new Arqueiro("Robin Hood", 15, 9, 60, 11, true, 8);

// console.log(persoGuerreiro.atacar(persoMago));
// console.log(persoMago.atacar(persoGuerreiro));

// console.log(persoArqueiro.atacar(persoArqueiro2));
// console.log(persoArqueiro.atacar(persoArqueiro2));
// console.log(persoArqueiro.atacar(persoArqueiro2));
// console.log(`Total de flechas do ${persoArqueiro.nome} agora é ${persoArqueiro.recarregarFlecha(5)}`);

console.log(persoMago.atacar(persoArqueiro));
console.log(persoMago.atacar(persoArqueiro));
console.log(persoMago.atacar(persoArqueiro));
console.log(persoMago.atacar(persoArqueiro));
console.log(persoMago.atacar(persoArqueiro));
console.log(persoMago.atacar(persoArqueiro));
console.log(persoMago.atacar(persoArqueiro));
console.log(persoMago.atacar(persoArqueiro));
console.log(persoMago.atacar(persoArqueiro));
console.log(persoMago.atacar(persoArqueiro));
console.log(persoMago.atacar(persoArqueiro));
console.log(persoMago.atacar(persoArqueiro));
console.log(persoMago.atacar(persoArqueiro));
console.log(persoMago.atacar(persoArqueiro));
