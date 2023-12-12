//uma função que realiza um foreach em cada elemento do parametro da função, ou seja, dos livros. 
//vai inserir no html, na livrosSection, várias divs com base nas informações do objeto em questão
function adicionaLivros(livros) {
    livrosSection.innerHTML = ''; //limpar a livrosSection, adicionando uma string vazia
    livros.forEach(livro => {
        const disponibilidade = livro.quantidade > 0 ? 'livro__imagens' : 'livro__imagens indisponivel'; // verifica se a quantidade do livro é maior que 0, se for, a variavel receberá apenas a string 'livro__imagens', se não, receberá 'livro__imagens indisponivel'
        livrosSection.innerHTML += `
            <div class="livro">
                <img class="${disponibilidade}" src="${livro.imagem}" alt="${livro.alt}"/>
                <h2 class="livro__titulo">
                    ${livro.titulo}
                </h2>
                <p class="livro__descricao">${livro.autor}</p>
                <p class="livro__preco" id="preco">R$${livro.preco.toFixed(2)}</p>
                <div class="tags">
                    <span class="tag">${livro.categoria}</span>
                </div>
            </div>
        `;
    });
}