class Popup {

	constructor() {
		this.unhidePopup = document.querySelector("#popup");
	}

	showPopup() { // Affiche la zone de signature
		this.unhidePopup.style.visibility = "visible";
	}

	hidePopup() { // Masque la zone de signature
		this.unhidePopup.style.visibility = "hidden";
	}
}

let popup = new Popup();