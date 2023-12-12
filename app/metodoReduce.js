function somaPrecoLivroDisponiveis(livrosDisponiveis) {
    const total = livrosDisponiveis.reduce((acc, curr) => {
        acc+=curr.preco;
        return acc;
    }, 0);
    return total;
}