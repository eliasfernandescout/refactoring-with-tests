const calculate1 = require('./calculate1')

test('Deve calcular o valor de uma corrida de taxi em dias normais', () => {
    //given range
    const distante = 1000;
    const date = new Date('2021-07-10T10:00:00')
    //when
    const price = calculate1.calculateRide(distante, date);
    //then
    expect(price).toBe(2100);
    
});

test('Deve calcular o valor de uma corrida de taxi a noite', () => {
    //given range
    const distante = 1000;
    const date = new Date('2021-07-10T23:00:00')
    //when
    const price = calculate1.calculateRide(distante, date);
    //then
    expect(price).toBe(3900);
    
});

test('Deve calcular o valor de uma corrida de taxi no domingo', () => {
    //given range
    const distante = 1000;
    const date = new Date('2021-07-11T23:00:00')
    //when
    const price = calculate1.calculateRide(distante, date);
    //then
    expect(price).toBe(3900);
    
});
