(function exportPort() {
   class Port {
      constructor(name){
       this.name = name;
       this.ships = [];
      }
   
      addShip(ship){
         this.ships.push(ship);
      }
   
      removeShip(ship) {
         this.ships = this.ships.filter(dockedShip => dockedShip !== ship);
       };
   };

   if (typeof module !== 'undefined' && module.exports) {
      module.exports = Port;
    } else {
      window.Port = Port;
    };
    
} ());


