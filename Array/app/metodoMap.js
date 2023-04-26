function aplicarDesconto(livros) {
  const desconto = 0.3;
  livrosComDesconto = livros.map(item => {
    return { ...item, preco: item.preco - item.preco * desconto }
  });
  return livrosComDesconto;
}