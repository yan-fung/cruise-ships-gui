class Ship{
    constructor(name) {
        this.currentPort = name;
    }

    setSail() {
        this.currentPort = false;
    }

    dock(port) {
        this.currentPort = port;
    }
}



module.exports = Ship;