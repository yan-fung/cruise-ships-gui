const Port = require('../src/port')
const Ship = require('../src/ship')

describe('constructor', () => {
    describe('with port', () => {
        let port;

        beforeEach(() => {
            port = new Port('Liverpool')
        });

        it('can be instantiated', () => {
            expect(new Port()).toBeInstanceOf(Object);
        })


        it('has the name for the port', () => {
            expect(port.name).toEqual('Liverpool');
        });

        it('can add a ship to the port', () => {
            const ship = {};
    
            port.addShip(ship);
    
            expect(port.ships).toContain(ship);
        });
    
    });

})