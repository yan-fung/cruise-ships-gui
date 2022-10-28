const Ship = require('../src/ship');
const Port = require('../src/port');
const Itinerary = require('../src/itinerary');


describe('Ship', () => {
  // describe('with ports and an itinerary', () => {
  let ship;
  let dover;
  let calais;
  let itinerary;

  beforeEach(() => {
    dover = new Port('Dover');
    calais = new Port('Calais')
    itinerary = new Itinerary([dover, calais]);
    ship = new Ship(itinerary);
  });

  it('can be instantiated', () => {

    expect(ship).toBeInstanceOf(Object);
});

  it('has a starting port', () => {

    expect(ship.currentPort).toBe(dover);
});

  it('can set sail', () => {

    ship.setSail();
  
    expect(ship.currentPort).toBeFalsy();
    expect(dover.ships).not.toContain(ship);
  });

  it('gets added to port on instantiation', () => {

    expect(dover.ships).toContain(ship);
  });

  it('can dock at a different port', () => {
    ship.setSail();
    ship.dock();
  
    expect(ship.currentPort).toBe(calais);
    expect(calais.ships).toContain(ship);
  });

  it('it can\'t sail further than its itinerary', () => {
    ship.setSail();
    ship.dock();
    
    expect(() => ship.setSail()).toThrowError('End of itinerary reached');
  });

  // });

})