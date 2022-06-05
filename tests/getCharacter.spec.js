const getCharacter = require('../src/getCharacter');

describe('9 - Implemente os casos de teste da função `getCharacter`', () => {
  it('Verifica se a função `getCharacter` retorna o objeto do personagem corretamente.', () => {
    expect(getCharacter()).toBe(undefined);
    expect(getCharacter('Arya')).toStrictEqual({
      name: 'Arya Stark',
      class: 'Rogue',
      phrases: [ 'Not today', 'A girl has no name.' ]
    });
    expect(getCharacter('Brienne')).toStrictEqual({
      name: 'Brienne Tarth',
      class: 'Knight',
      phrases: ['Im No Lady, Your Grace.', 'I, Brienne Of Tarth, Sentence You To Die.'],
    });
    expect(getCharacter('Melissandre')).toStrictEqual({
    name: 'Melissandre',
    class: 'Necromancer',
    phrases: ['Death By Fire Is The Purest Death.', 'For The Night Is Dark And Full Of Terrors.'],
  });
    expect(getCharacter('Arya')).not.toEqual('arya');
    expect(getCharacter('biscoito')).toBe(undefined);
  });
});
