const productDetails = require('../src/productDetails');
describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    expect(typeof productDetails).toBe('function');
    expect(Array.isArray (productDetails('Alcool gel', 'Máscara'))).toEqual(true);
    expect(Object.keys(productDetails('Alcool gel', 'Máscara')).length).toEqual(2);
    expect(typeof Object.keys(productDetails('Alcool gel', 'Máscara'))).toEqual('object');
    expect(productDetails('Alcool gel', 'Máscara')[0] !== productDetails('Alcool gel', 'Máscara')[1]).toEqual(true);
    expect(productDetails('Alcool gel', 'Máscara')[0].details.productId.endsWith('123')).toEqual(true);
    expect(productDetails('Alcool gel', 'Máscara')[1].details.productId.endsWith('123')).toEqual(true);
  });
});
