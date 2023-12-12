// função que recebe o array de livros e retorna um array novo com o preco alterado
function aplicaDesconto(array) {
    const desconto = 0.2;
    const livrosComDesconto = array.map((livro) => {
        return { ...livro, preco: livro.preco - (livro.preco * desconto) }; // o spread operator (...) retornará todos os itens daquele objeto, porém se você adicionar uma chave que já existe naquele objeto, o valor é substituído
    });
    return livrosComDesconto;
}