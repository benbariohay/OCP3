class SliderObject {
	constructor() {
		this.i = 0; 
		this.images = ["images/image1.jpg", "images/image2.jpg", "images/image3.jpg", "images/image4.jpg"];
		this.keyboardKeys();
		this.leftButton = document.querySelector("#left-btn");
		this.rightButton = document.querySelector("#right-btn");
		this.pauseButton = document.querySelector("#pause-btn");
		this.playButton = document.querySelector("#play-btn");
		this.startSlider();
		this.leftButtonNav();
		this.rightButtonNav();
		this.pauseButtonNav();
		this.playButtonNav();
		this.firstStart();
	}

// Fonctionnement du slider

	firstStart() { // Initialise le premier slide
		document.slide.src = this.images[this.i];
	}

	nextSlide() { // Affiche le slide suivant
		this.i++;
		if (this.i > this.images.length - 1) {
			this.i = 0;
		};
		document.slide.src = this.images[this.i];
	}

	previousSlide(){ // Affiche le slide précédent
		this.i--;
		if (this.i < 0) {
			this.i = this.images.length - 1;
		};
		document.slide.src = this.images[this.i];
	}

// Lancement et arrêt du slider

	startSlider() {
		this.interval = setInterval(() => this.nextSlide(), 5000);
	}

	stopSlider() {
		clearInterval(this.interval);
	}

// Evénement touches du clavier

	keyboardKeys() { 
		document.body.addEventListener('keydown', (e) => {
            if (e.keyCode == '37') {
                this.previousSlide();
            } else if (e.keyCode == '39') {
                this.nextSlide();
            }
        })
	}

// Evénements boutons du slider

	leftButtonNav() {
		this.leftButton.addEventListener('click', () => {
			this.previousSlide();
		})
	}

	rightButtonNav() {
		this.rightButton.addEventListener('click', () => {
			this.nextSlide();
		})
	}

	pauseButtonNav() {
		this.pauseButton.addEventListener('click', () => {
			this.stopSlider();
			this.playButton.style.display = "inline-block";
			this.pauseButton.style.display = "none";
		})
	}

	playButtonNav() {
		this.playButton.addEventListener('click', () => {
			this.startSlider();
			this.pauseButton.style.display = "inline-block";
			this.playButton.style.display = "none";
		})
	}
}

let slider = new SliderObject();