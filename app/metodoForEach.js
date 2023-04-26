const elementoParaInserirLivros = document.getElementById('livros');

function exibirOsLivrosNaTela(listaDeLivros) {
  elementoParaInserirLivros.innerHTML = '';
  elementoValorLivrosDisponiveis.innerHTML = '';
  listaDeLivros.forEach(item => {
    let disponibilidade = item.quantidade > 0 ? 'livro__imagens' : 'livro__imagens indisponivel'
    elementoParaInserirLivros.innerHTML += `
    <div class="livro">
    <img class="${disponibilidade}" src="${item.imagem}" alt="Capa do livro Cangaceiro JavaScript" />
    <h2 class="livro__titulo">
      ${item.titulo}
    </h2>
    <p class="livro__descricao">${item.autor}</p>
    <p class="livro__preco" id="preco">R$${item.preco.toFixed(2)}</p>
    <div class="tags">
      <span class="tag">${item.categoria}</span>
    </div>
  </div>`
  });
} 