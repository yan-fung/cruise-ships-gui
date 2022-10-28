const Itinerary = require('../src/itinerary')
const Port = require('../src/port')

describe('itinerary', () => {
    let dover;
    let calais;
    let itinerary;

    beforeEach(() => {
        dover = new Port('Dover');
        calais = new Port('Calais');
        itinerary = new Itinerary([dover, calais]);
    })

    it('can be instantiated', () => {

        expect(new Itinerary()).toBeInstanceOf(Object);
    })

    it('can check the ports in array', () => {

       expect(itinerary.ports).toEqual([dover, calais]);
    })
})
