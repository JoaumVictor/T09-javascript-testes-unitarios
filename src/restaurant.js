const createMenu = (string) => {
  if (!string) return undefined;
  const cardapio = [
    { name: 'coxinha', valor: 3.90 },
    { name: 'sanduiche', valor: 9.90 },
    { name: 'agua', valor: 3.90 },
    { name: 'cerveja', valor: 6.90 }];
  let conta = 0;
  cardapio.forEach((each) => {
    if (each.name === string) conta += each.valor;
  });
  const verify = cardapio.some((each) => each.name === string);
  if (!verify) return 'Produto não encontrado';
  return conta;
};

module.exports = createMenu;
