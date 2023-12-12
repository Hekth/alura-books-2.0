const btns = document.querySelectorAll('.btn'); // nodelist com todos os botoes de filtro
const valorLivrosDisponiveisSection = document.getElementById('valor_total_livros_disponiveis');
let livrosDisponiveis = [];
function adicionaEventoBotao(items) { // items é o array de livros
    // para cada botao, adicionarei um evento de clique
    btns.forEach((btn) => { 
        // ao ser clicados os botoes vão:
        btn.addEventListener('click', (e) => {
            const { target: { id, value } } = e;

            // verificar se o id do botao clicado é igual a 'btnLivrosDisponiveis', se for, filtrará pelos livros com a quantidade maior que 0 e chamará a função adicionaLivros que imprime os livros no html
            if (id === 'btnLivrosDisponiveis') { 
                livrosDisponiveis = items.filter((i) => i.quantidade > 0);
                verificaSeELivrosDisponiveis(id);
                adicionaLivros(livrosDisponiveis);
                return;
            }

            // verificar se o id do botao clicado é igual a 'btnOrdenarPorPreco', se for, chamará a função que ordena o array de livros pelo preco
            if (id === 'btnOrdenarPorPreco') {
                verificaSeELivrosDisponiveis(id);
                ordenaPorPreco(items);
                return;
            } 

            // se o valor do botao clicado for true, se existir, pegarei o valor do value e filtrarei verificando se a categoria daquele objeto livro é igual ao value, filtrando de acordo com a categoria
            if (value) { 
                const livrosFiltrados = items.filter(({categoria}) => categoria === value);
                verificaSeELivrosDisponiveis(value);
                adicionaLivros(livrosFiltrados);
                return;
            }
        });
    });
}

function verificaSeELivrosDisponiveis(id) {
    const somaTotal = somaPrecoLivroDisponiveis(livrosDisponiveis);
    const divTotalPreco = `
        <div class="livros__disponiveis">
            <p>Todos os livros disponíveis por R$ <span id="valor">${somaTotal}</span></p>
        </div>
    `

    id === 'btnLivrosDisponiveis' ? valorLivrosDisponiveisSection.innerHTML = divTotalPreco : valorLivrosDisponiveisSection.innerHTML = '';
}
