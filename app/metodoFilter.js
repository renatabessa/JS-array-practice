const botoes = document.querySelectorAll('.btn');
botoes.forEach(btn => {
  btn.addEventListener('click', filtrarLivros)
});
console.log(botoes);

function filtrarLivros() {
  const elementoBtn = document.getElementById(this.id);
  const categoriaBtn = elementoBtn.value;
  let livrosFiltrados = categoriaBtn == 'disponivel' ? livrosPorDisponibilidade() : livrosPorCategoria(categoriaBtn);
  console.table(livrosFiltrados);
  exibirOsLivrosNaTela(livrosFiltrados);
  if (categoriaBtn == 'disponivel') {
    const valorTotal = calcularValorLivrosDisponiveis(livrosFiltrados);
    exibirValorDosLivrosDisponiveis(valorTotal);
  }
}

function livrosPorDisponibilidade() {
  exibirValorDosLivrosDisponiveis();
  return livros.filter(livro => livro.quantidade > 0);
}

function livrosPorCategoria(categoriaBtn) {
  return livros.filter(livro => livro.categoria == categoriaBtn);
}

function exibirValorDosLivrosDisponiveis(valorTotal) {
  elementoValorLivrosDisponiveis.innerHTML = `
  <div class="livros__disponiveis">
      <p>Todos os livros disponíveis por R$ <span id="valor">R$ ${valorTotal} </span></p>
  </div>`
}

//CASO FOSSE FAZER UM BOTÃO POR UM
// const btnFiltrarLivrosFront = document.getElementById('btnFiltrarLivrosFront');
// console.log(btnFiltrarLivrosFront);

// btnFiltrarLivrosFront.addEventListener('click', filtrarLivrosDeFront);

// function filtrarLivrosDeFront() {
//   let livrosFiltradosDeFront = livros.filter(livro => livro.categoria == 'front-end');
//   console.table(livrosFiltradosDeFront);
// }