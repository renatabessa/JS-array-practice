let btnOrdenarPreco = document.getElementById('btnOrdenarPorPreco');
btnOrdenarPreco.addEventListener('click', ordernarLivrosPorPreco);

function ordernarLivrosPorPreco() {
  let livrosOrdenados = livros.sort((a, b) => a.preco - b.preco);
  exibirOsLivrosNaTela(livrosOrdenados);
}

