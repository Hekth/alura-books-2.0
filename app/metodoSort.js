const botaoOrdenaLivros = document.getElementById('btnOrdenarPorPreco');

function ordenaPorPreco(elementos) {
    elementos.sort((a, b) => a.preco - b.preco);
    adicionaLivros(elementos); 
}

//retorna os elementos do array com base no preco, do menor pro maior. O METODO SORT ALTERA O ARRAY ORIGINAL!!!