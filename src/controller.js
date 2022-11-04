(function exportController() {
    class Controller {
        constructor() {
            this.initialiseSea();
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
        }

        renderShip(ship) {
            const shipPortIndex = ship.itinerary.ports.indexOf(ship.currentPort);
            const portElement = document.querySelector(`[data-port-index='${shipPortIndex}']`);

            const shipElement = document.querySelector('#ship');
            shipElement.style.top = `${portElement.offsetTop + 32}px`;
            shipElement.style.left = `${portElement.offsetLeft - 32}px`;

        }
    
    };

    if (typeof module !== 'undefined' && module.exports) {
       module.exports = Controller;
     } else {
       window.Controller = Controller;
     };
     
 } ());
 