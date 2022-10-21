const Port = require('../src/port')

describe('constructor', () => {
    it('return the object', () => {
        expect(new Port()).toBeInstanceOf(Object);
    })

    it('has the name for the port', () => {
        const port = new Port('Liverpool')
        expect(port.name).toEqual('Liverpool');

        const port1 = new Port('London')
        expect(port1.name).toEqual('London');
    })
})