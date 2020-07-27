class Booking {

	constructor() {
		this.lastNameBook = document.querySelector("#lastname-book");
		this.firstNameBook = document.querySelector("#firstname-book");
		this.adressBook = document.querySelector("#adress-book");
		this.cancelButton = document.querySelector("#cancel-button");
		this.validationButton = document.querySelector("#validation-button");
		this.cancelBookButton = document.querySelector("#cancel-book-button");
		this.noReservation = document.querySelector("#no-reservation");
		this.bookingDataTimer = document.querySelector("#booking-data-timer");
		this.cancelBookBookingClick();
	}

	cancelButtonClick() { // Evénement au clic du bouton "cancel" du canvas
		this.cancelButton.addEventListener("click", () => {
			popup.hidePopup();
			canvas.clearCanvas();
			canvas.validationCanvasButton.style.display = 'none';
		});
	}

	runningOnClick() { // Instructions pour démarrer le compte à rebours
		countdown.secondes = 60;
		countdown.minutes = 19;
		countdown.running();
		popup.hidePopup();
		webstorage.stationInfoStorage();
		webstorage.nameStorage();
		canvas.clearCanvas();
		this.bookingDataTimer.style.display = "flex";
		this.noReservation.style.display = "none";
		this.lastNameBook.textContent = " " + form.lastName.value;     
		this.firstNameBook.textContent = form.firstName.value;  
		this.adressBook.textContent = stationData.stationAddress.textContent;
		this.validationButton.style.display = "none";
	}

	confirmBooking() { // Evénement au clic du bouton "valider" du canvas
		this.validationButton.addEventListener("click", () => {
			if (sessionStorage.getItem("Secondes")) {
				this.runningOnClick();
			} else {
				clearInterval(countdown.iTimer);
				this.runningOnClick();
				countdown.iTimer = setInterval(() => countdown.secondesCounting(), 1000);
			}
		});
	}

	cancelBookBookingClick() { // Evénement au clic du bouton "annuler la réservation"
		this.cancelBookButton.addEventListener("click", () => {
			clearInterval(countdown.iTimer);
			sessionStorage.clear();
			this.validationButton.style.display = "none";
			this.bookingDataTimer.style.display = "none";
			this.noReservation.style.display = "block";
			this.noReservation.textContent = "Réservation annulée";
		});
	}
}	

let booking = new Booking();