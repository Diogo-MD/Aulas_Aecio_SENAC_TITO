class materialBibliografico {
    constructor(titulo, autor) {
        this.titulo = titulo;
        this.autor = autor;
        this.disponivel = true;
    }

    realizarEmprestimo() {
        if (this.disponivel) {
            this.disponivel = false;
            return true; // Empréstimo realizado com sucesso
        } else {
            return false; // Material já emprestado
        }
    }

    realizarDevolucao() {
        if (this.disponivel == false) {
            this.disponivel = true;
            return true; // Devolução realizada com sucesso
        } else {
            return false; // Material já devolvido previamente
        }

    }

    // Jeito certo mas não o mais semântico ABAIXO
    realizarDevolucao() {
        if (this.disponivel) {
            return false; // Material já devolvido previamente 
        } else {
            return true; // Devolução realizada com sucesso
        }
    }

}

class livro extends materialBibliografico {
    constructor(titulo, autor, genero) {
        super(titulo, autor);
        this.genero = genero;
    }
}

class revista extends materialBibliografico {
    constructor(titulo, autor, categoria) {
        super(titulo, autor);
        this.categoria = categoria;
    }
}

function realizarAcao(acao) {
    
}



const livros = [
    new livro("O Senhor dos Anéis", "J.R.R. Tolkien", "Fantasia"),
    new livro("Harry Potter e a Pedra Fiolosofal", "J.K. Rowling", "Fantasia"),
    new livro("Crepúsculo", "Stephenie", "Romance"),
    new revista("National Geographic", "National Geographic Society", "Ciência"),
];

const selectLivros = document.getElementById("livros");

// Enquanto o (i) for menor que o tamanho do array/lista de livros, Executa algo
for (let i = 0; i < livros.length; i++) {
    const livro = livros[i];
    const option = document.createElement("option");
    // Adciona 1 para evitar o valor 0 que representa o selected hidden "Selecione um livro"
    option.value = i + 1;
    option.text = livro.titulo;
    selectLivros.add(option);
}