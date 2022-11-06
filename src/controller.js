(function exportController() {
    class Controller {
        constructor(ship) {
            this.initialiseSea();
            this.ship = ship;
            document.querySelector('#sailbutton').addEventListener('click', () => {
                this.setSail();
            });
        }
    
    
        initialiseSea() {
            const backgrounds = [
                './images/water0.png',
                './images/water1.png',
            ];
    
            let backgroundIndex = 0;
            window.setInterval(() => {
                document.querySelector('#viewport').style.backgroundImage = `url('${backgrounds[backgroundIndex % backgrounds.length]}')`;
               
                backgroundIndex += 1;
            }, 1000);
        };

        renderPorts(ports) {
            //set a width of 0 as we want JS to manipulate the width of this container every time we add a child element.
            const portsElement = document.querySelector('#ports');
            portsElement.style.width = '0px';

            
            ports.forEach((port, index) => {
                // create element (div) for appending to the portsElement
                const newPortElement = document.createElement('div');
                newPortElement.className = 'port'; //assign a class to this div
                newPortElement.dataset.portName = port.name;//set data attr for port name
                newPortElement.dataset.portIndex = index;//set data attr for index

                portsElement.appendChild(newPortElement);

                //Add 256px to the #ports div every time a new port element is appended to it
                const portsElementWidth = parseInt(portsElement.style.width, 10);
                portsElement.style.width = `${portsElementWidth + 256}px`;
            })
        };

        renderShip() {
            const ship = this.ship;
            const shipPortIndex = ship.itinerary.ports.indexOf(ship.currentPort);
            const portElement = document.querySelector(`[data-port-index='${shipPortIndex}']`);

            const shipElement = document.querySelector('#ship');
            shipElement.style.top = `${portElement.offsetTop + 32}px`;
            shipElement.style.left = `${portElement.offsetLeft - 32}px`;
        };

        setSail() {

            const ship = this.ship;
            // find the next port index so that we can use find its data attribute in DOM
            const currentPortIndex = ship.itinerary.ports.indexOf(ship.currentPort);
            const nextPortIndex = currentPortIndex + 1;
            const nextPortElement = document.querySelector(`[data-port-index='${nextPortIndex}']`);

            const shipElement = document.querySelector('#ship');
            const sailInterval = setInterval(() => {
                const shipLeft = parseInt(shipElement.style.left, 10);
                if (shipLeft === (nextPortElement.offsetLeft - 32)) {
                    ship.setSail();
                    ship.dock();
                    this.renderMessage(`Now we are at ${ship.currentPort.name}`)
                    clearInterval(sailInterval);
                }

                shipElement.style.left = `${shipLeft + 1.5}px`
            }, 20);

            // alert message popped up if the user attempts to go further than the itinerary
            if (!nextPortElement) {
                this.renderMessage('This is the final destination.')
                return alert('End of the journey!');
              }
            
            this.renderMessage(`Now we are departing ${ship.currentPort.name}`)

            this.renderDisplay();

        };

        renderMessage(message) {
            const messageElement = document.createElement('div');
            messageElement.id = 'message';
            messageElement.innerHTML = message;

            const viewPort = document.querySelector('#viewport');
            viewPort.appendChild(messageElement);

            setTimeout(() => {
                viewPort.removeChild(messageElement);
            }, 2000);

        }

        renderDisplay() {
            
            const ship = this.ship;
            const currentPortElement = document.createElement('div');
            const nextPortElement = document.createElement('div');

            currentPortElement.id = 'current-port';
            currentPortElement.innerHTML = `Current Port: ${ship.currentPort.name}`;

            nextPortElement.id = 'next-port';
            const currentPortIndex = ship.itinerary.ports.indexOf(ship.currentPort);
            const nextPortIndex = currentPortIndex + 1;
            const nextPortName = itinerary.ports[nextPortIndex].name;
            nextPortElement.innerHTML = `Next Port: ${nextPortName}`;


            const displayElement = document.querySelector('#display');
            displayElement.appendChild(currentPortElement);
            displayElement.appendChild(nextPortElement);

            setTimeout(() => {
                displayElement.removeChild(currentPortElement);
            }, 5000);

            setTimeout(() => {
                displayElement.removeChild(nextPortElement);
            }, 5000);

        }
    
    };

    if (typeof module !== 'undefined' && module.exports) {
       module.exports = Controller;
     } else {
       window.Controller = Controller;
     };

     document.querySelector('#restart-btn').addEventListener('click', function () {
        window.location.reload();
     });
     
 } ());
 