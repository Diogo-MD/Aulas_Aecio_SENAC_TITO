class Animal {
    constructor(nasce, cresce, reproduz, morre) {
        this.nasce = nasce;
        this.cresce = cresce;
        this.reproduz = reproduz;
        this.morre = morre;
        // 3 Básicas
        // nasce, cresce, reproduz, morre
    }
}

class Mamifero extends Animal {
    constructor(amamentar) {
        this.amamentar = amamentar;
        // 1 Específica
        // amamentar
    }
}

class Oviparo {
    
    // 1 Específica
    // poe ovos
}