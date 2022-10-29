const Port = require('../src/port');
const Ship = require('../src/ship');


describe('with port', () => {
    let port;

    beforeEach(() => {
        port = new Port('Liverpool');
    });

    it('can be instantiated', () => {
        expect(new Port()).toBeInstanceOf(Object);
    });

    it('has the name for the port', () => {
        expect(port.name).toEqual('Liverpool');
    });
});


describe('addShip', () => {
    let port;
    let ship1 = jest.fn();
    let ship2 = jest.fn();

    beforeEach(() => {
        port = new Port('Dover');
    })

    it('can add a ship to the port', () => {

        port.addShip(ship1);

        expect(port.ships).toContain(ship1);

        port.addShip(ship2);
        expect(port.ships).toContain(ship2);

    });
});

describe('removeShip', () => {
    let port;
    let ship1 = jest.fn();
    let ship2 = jest.fn();

    beforeEach(() => {
        port = new Port('Dover');

        port.addShip(ship1);
        port.addShip(ship2);
    });

    it('can remove a ship from the port', () => {
        port.removeShip(ship1);

        expect(port.ships).not.toContain(ship1);

        port.removeShip(ship2);

        expect(port.ships).not.toContain(ship2);
    });
});







