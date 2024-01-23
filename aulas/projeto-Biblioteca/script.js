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