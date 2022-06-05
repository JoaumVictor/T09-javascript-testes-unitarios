const circle = require('../src/circle');

describe('4 - Implemente os casos de teste para a função `circle`', () => {
  it('Verifica se ao receber um raio, a função `circle` retorna um objeto contedos os valores esperados', () => {
    expect(circle('bababui')).toEqual(undefined);
    // Teste se circle retorna undefined, caso o parâmetro passado não seja um número.
    expect(typeof(circle(1))).toBe('object');
    // Teste se circle retorna um objeto.
    expect(Object.keys(circle(5)).length).toBe(3);
    // Teste se o objeto retornado tem 3 propriedades.
    expect(circle()).toEqual(undefined);
    // Teste se a função, quando não recebe nenhum parâmetro, retorna undefined.
    //expect((circle(2))["circumference"]).toBeCloseTo(12,56);
    expect((circle(2)).circumference).toBeCloseTo(12.56);
    // Teste se dentro do objeto retornado, a função retorna uma key com value igual a circunferência correta para um círculo de raio 2.
    expect((circle(3)).area).toBeCloseTo(28.26);
    // Teste se dentro do objeto retornado, a função retorna uma key com value igual a área correta para um círculo de raio 3.
    expect((circle(3))).toEqual({ radius: 3, area: 28.259999999999998, circumference: 18.84 });
    // Teste que a função retorna, num objeto, os dados corretos de um círculo de raio 3.
  });
});
