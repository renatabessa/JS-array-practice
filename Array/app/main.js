let livros = [];
const endpointDaAPI = "https://guilhermeonrails.github.io/casadocodigo/livros.json";
getBuscarLivrosDaAPI();
const elementoValorLivrosDisponiveis = document.getElementById('valor_total_livros_disponiveis');

async function getBuscarLivrosDaAPI() {
  const res = await fetch(endpointDaAPI);
  livros = await res.json();
  let livrosComDesconto = aplicarDesconto(livros);
  console.table(livros);

  //exibirOsLivrosNaTela(livros);
  exibirOsLivrosNaTela(livrosComDesconto);
}



