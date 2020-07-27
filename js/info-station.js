class StationInfo {

	constructor() { 
		this.stationStatus = document.querySelector("#station-status span");
		this.stationAddress = document.querySelector("#station-address span");
		this.availableBikes = document.querySelector("#station-available-bikes span");
		this.availableStands = document.querySelector("#station-available-stands span");
		this.bookButton = document.querySelector("#book-button");
	}

	stationData(e) { // Affiche les données des stations
		this.stationStatus.textContent = e.status;
        this.stationAddress.textContent = e.address;
        this.availableBikes.textContent = e.available_bikes;
        this.availableStands.textContent = e.available_bike_stands;
	}

	translateStatus(e) { // Traduction des statuts en français
		if (e.status === "OPEN") {
			this.stationStatus.textContent = "OUVERTE";
		} else {
			this.stationStatus.textContent = "FERMÉE";
		}
	}

	hideBookButton() { // Vérifie la disponibilité des vélos
		if (this.availableBikes.textContent == 0) {
			this.bookButton.className = "hider";
		} else
			this.bookButton.className = "";
	}

	openPopup() { // Evénement au clic du bouton "valider" du formulaire -> Affiche la zone de signature
    	stationData.bookButton.addEventListener("click", (event) => {
    		form.formValidation(event);
    		event.preventDefault(); // Evite le rechargement de la page à la validation du formulaire
    	});
    }

	displayInfoStation(e) { //Affiche les données des stations
        this.station = e; // Ajoute les infos de la station dans une propriété pour y avoir accès dans les autres méthodes                             
        this.stationData(e);
        this.translateStatus(e);
        this.hideBookButton(e);
        this.openPopup(e);
        booking.cancelButtonClick(e);
        booking.confirmBooking(e);
        booking.cancelBookBookingClick(e);
    }
}

let stationData = new StationInfo();