class materialBibliografico {
    constructor(titulo, autor) {
        this.titulo = titulo;
        this.autor = autor;
        this._disponivel = true;
    }

    realizarEmprestimo() {
        if (this._disponivel) {
            this._disponivel = false;
            return true; // Empréstimo realizado com sucesso
        } else {
            return false; // Material já emprestado
        }
    }

    realizarDevolucao() {
        if (this._disponivel == false) {
            this._disponivel = true;
            return true; // Devolução realizada com sucesso
        } else {
            return false; // Material já devolvido previamente
        }
    }

    renomearAutor(novoNome) {
        if (novoNome == "") {
            return alert("Não pode cadastrar nome vazio")
        }
        this.autor = novoNome;
    }

    toString() {
        return `${this.titulo} - ${this.autor}`;
    }
}

class livro extends materialBibliografico {
    constructor(titulo, autor, genero) {
        super(titulo, autor);
        this.genero = genero;
    }

    alternarGenero(novoGenero) {
        this.genero = novoGenero
    }

    toString() {
        return `${super.toString()} - ${this.genero}`;
    }
}

class revista extends materialBibliografico {
    constructor(titulo, autor, categoria) {
        super(titulo, autor);
        this.categoria = categoria;
    }
}

function realizarAcao(acao) {
    const selectLivros = document.getElementById("livros");
    const selectedIndex = selectLivros.selectedIndex;

    if (selectedIndex === 0) {
        alert("Por favor, Selecione um livro!")
        return;
    }

    const livroSelecionado = livros[selectedIndex - 1];

    if (acao === 'emprestimo') {
        const emprestimoSucesso = livroSelecionado.realizarEmprestimo();
        exibirResultado(`Empréstimo de ${livroSelecionado.titulo}: ${emprestimoSucesso ? 'Sucesso' : 'Material já emprestado'}`)
    } else if (acao === 'devolucao') {
        const devolucaoSucesso = livroSelecionado.realizarDevolucao();
        exibirResultado(`Empréstimo de ${livroSelecionado.titulo}: ${devolucaoSucesso ? 'Sucesso' : 'Material já devolvido'}`)
    }
}

function exibirResultado(mensagem) {
    const resultadoDiv = document.getElementById("resultado")
    resultadoDiv.innerHTML += `<p>${mensagem}</p>`
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
    // Adiciona 1 para evitar o valor 0 que representa o selected hidden "Selecione um livro"
    option.value = i + 1;
    option.text = livro.titulo;
    selectLivros.add(option);
}

console.log(livros[0].toString());
console.log(livros[3].toString());  