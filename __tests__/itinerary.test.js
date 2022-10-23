const Itinerary = require('../src/itinerary')
const Port = require('../src/port')

describe('constructor', () => {
    it('return the object', () => {
        expect(new Itinerary()).toBeInstanceOf(Object);
    })

    it('can has a ports', () => {
       const dover = new Port('Dover');
       const calais = new Port('Calais');

       const itinerary = new Itinerary([dover, calais]);

       expect(itinerary.ports).toEqual([dover, calais]);
    })
})
