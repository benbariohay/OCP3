class Storage {

	stationInfoStorage() { // Ajoute les informations de réservation dans le sessionStorage
		sessionStorage.setItem("Adress", document.querySelector("#station-address span").textContent);
		sessionStorage.setItem("Available bikes", document.querySelector("#station-available-bikes span").textContent);
		sessionStorage.setItem("Available stands", document.querySelector("#station-available-stands span").textContent);
		sessionStorage.setItem("Last Name", form.lastName.value);
		sessionStorage.setItem("First Name", form.firstName.value);
	}

	nameStorage() { // Ajoute les informations du client (Nom et Prénom) dans le localStorage
		localStorage.setItem("Last Name", form.lastName.value);
		localStorage.setItem("First Name", form.firstName.value);
	}

	clearSessionStorage() { // Supprime les données du sessionStorage
		sessionStorage.clear();
	}
}

let webstorage = new Storage();