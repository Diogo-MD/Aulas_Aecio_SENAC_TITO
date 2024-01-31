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
    constructor(nome, ataque, defesa, vida, posicao, vivo = true,) {
        super(nome, ataque, defesa, vida, posicao, vivo)
    }
}

class Guerreiro extends Personagem {
    constructor(nome, ataque, defesa, vida, posicao, vivo = true, escudo) {
        super(nome, ataque, defesa, vida, posicao, vivo,)
        this.escudo = escudo
    }
    tomarDano(quantidade) {
        console.log(`${this.nome} sofreu ${quantidade} de dano, mas defendeu ${this.escudo} com o escudo`)
        quantidade = quantidade - this.escudo
        super.tomarDano(quantidade)
    }
}

class Mago extends Personagem {
    constructor(nome, ataque, defesa, vida, posicao, vivo = true,) {
        super(nome, ataque, defesa, vida, posicao, vivo)
    }

}

let personagem1 = new Guerreiro("Arthur", 10, 12, 100, 1, true, 5);
let personagem2 = new Mago("Gendalf", 10, 8, 85, 1);


console.log(personagem1);
console.log(personagem2);

console.log(personagem1.atacar(personagem2));
console.log(personagem2.atacar(personagem1));
console.log(personagem1.recuperarVida(15));
console.log(personagem1.recuperarVida(15, personagem2));