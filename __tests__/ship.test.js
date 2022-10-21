const Ship = require('../src/ship');
const Port = require('../src/port');

describe('constructor', () => {
    it('returns an object', () => {
        expect(new Ship()).toBeInstanceOf(Object);
    })

    it('has a starting port', () => {
        const port = new Port('Dover');
        const ship = new Ship(port);
        expect(ship.currentPort).toEqual(port);
    })

    it('can set sail', () => {
        const port = new Port('Dover');
        const ship = new Ship(port);

        ship.setSail();

        expect(ship.currentPort).toBeFalsy();
    })

    it('can dock at different ports', () => {
        const dover = new Port('Dover');
        const ship = new Ship(dover);

        const calais = new Port('Calais');
        ship.dock(calais);

        expect(ship.currentPort).toBe(calais);
    })

})