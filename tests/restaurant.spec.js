const createMenu = require('../src/restaurant');
describe('10 - Implemente os casos de teste e a função `createMenu`', () => {
  it('Verifica se a função `createMenu` tem o comportamento esperado', () => {
    expect(typeof createMenu).toBe('function');
    expect(createMenu()).toBe(undefined);
    expect(createMenu('coxinha')).toBe(3.9);
    expect(createMenu('sanduiche')).toBe(9.9);
    expect(createMenu('cerveja')).toBe(6.9);
    expect(createMenu('miojo')).toBe("Produto não encontrado");
  });
});
