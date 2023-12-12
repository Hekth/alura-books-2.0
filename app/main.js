const livrosSection = document.getElementById('livros'); // section onde serão armazenados os livros e suas informações
const url = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'; //url da api onde irei buscar os livros

async function buscaLivrosDaApi() { //função assíncrona que faz a requisição a api de livros, chama a função para aplicar desconto nos precos,
    // chama a função que adiciona os livros na tela e chama outra função q adiciona os eventos nos botoes de filtro
    try {
        const res = await fetch(url);
        const livros = await res.json();
        const descontado = aplicaDesconto(livros); // retorna o array de livros só que com o preco alterado
        adicionaLivros(descontado); // recebe o array de livros com desconto e já imprime na tela
        adicionaEventoBotao(descontado); // adiciona eventos aos botões de filtro, era necessário colocar aqui devido a função assíncrona
    } catch (error) {
       console.log('Erro durante a requisição: ' + error); 
    }
}

buscaLivrosDaApi();