class CanvasObject {
    constructor() { 
        this.canvas = document.getElementById("signature");
        this.ctx = this.canvas.getContext('2d');
        this.clearButton = document.getElementById("erase-button");
        this.validationCanvasButton = document.getElementById("validation-button");
        this.cancelButton = document.querySelector("#cancel-button");
        this.draw = false;
        this.mousePosition = { x: 0, y: 0 };
        this.lastPosition = this.mousePosition;
        this.canvas.width = 200;
        this.canvas.height = 150;
        this.allEvents();
        this.drawStyle();
    }


    // Gestion de tous les événements 
    allEvents() {
        var self = this; // Permet d'éviter les problèmes de scope 

        // Souris
        this.canvas.addEventListener("mousedown", function (e) {
            self.draw = true;
            self.lastPosition = self.getMposition(e);
        });

        this.canvas.addEventListener("mousemove", function (e) {
            self.mousePosition = self.getMposition(e);
            self.canvasResult()
        });

        // Evénement sur le document pour retirer le clic hors canvas
        document.addEventListener("mouseup", function (e) { 
            self.draw = false;
        });

        // Évite le scroll au toucher
        document.body.addEventListener("touchstart", function (e) {
            if (e.target == self.canvas) {
                e.preventDefault();
            }
        }, {passive: false});

        document.body.addEventListener("touchend", function (e) {
            if (e.target == self.canvas) {
                e.preventDefault();
            }
        }, {passive: false});

        document.body.addEventListener("touchmove", function (e) {
            if (e.target == self.canvas) {
                e.preventDefault();
            }
        }, {passive: false});

        // Touchpad
        this.canvas.addEventListener("touchstart", function (e) {
           self.mousePosition = self.getTposition(e);
            var touch = e.touches[0];
            var mouseEvent = new MouseEvent("mousedown", {
                clientX: touch.clientX,
                clientY: touch.clientY
            });
            self.canvas.dispatchEvent(mouseEvent);
        });

        this.canvas.addEventListener("touchmove", function (e) {
            var touch = e.touches[0];
            var mouseEvent = new MouseEvent("mousemove", {
                clientX: touch.clientX,
                clientY: touch.clientY
            });
            self.canvas.dispatchEvent(mouseEvent);
        });

        this.canvas.addEventListener("touchend", function (e) {
            var mouseEvent = new MouseEvent("mouseup", {});
            self.canvas.dispatchEvent(mouseEvent);
        });

        // Bouton Effacer
        this.clearButton.addEventListener("click", function (e) {
            self.clearCanvas()
            self.validationCanvasButton.style.display = 'none';
        });
    }

    // Renvoie les coordonnées de la souris 
    getMposition(mouseEvent) {
        if (this.draw) {
            var canvasData = this.canvas.getBoundingClientRect();
            return {
                x: mouseEvent.clientX - canvasData.left,
                y: mouseEvent.clientY - canvasData.top
            };
        }
    }

    // Renvoie les coordonnées du touchpad 
    getTposition(touchEvent) {
        var canvasData = this.canvas.getBoundingClientRect();
        return {
            x: touchEvent.touches[0].clientX - canvasData.left,
            y: touchEvent.touches[0].clientY - canvasData.top
        };
    }

    // Dessine le canvas
    canvasResult() {
        if (this.draw) {
            this.ctx.beginPath();
            this.ctx.moveTo(this.lastPosition.x, this.lastPosition.y);
            this.ctx.lineTo(this.mousePosition.x, this.mousePosition.y);
            this.ctx.stroke();
            this.lastPosition = this.mousePosition;
            this.validationCanvasButton.style.display = 'block';
        }
    };

    // Vide le dessin du canvas
    clearCanvas() {
        this.canvas.width = this.canvas.width;
        // this.canvas.height = this.canvas.height;
        this.drawStyle();
    }

    // Style du dessin
    drawStyle(){
        this.ctx.strokeStyle = 'white';
        this.ctx.lineWidth = 2;
    }

}

let canvas = new CanvasObject();