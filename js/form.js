class Form {
	
	constructor() {
		this.lastName = document.querySelector("#lastname-input");
		this.firstName = document.querySelector("#firstname-input");
		this.lastNameRequired = document.querySelector("#lastname-required");
		this.firstNameRequired = document.querySelector("#firstname-required");
	}

	formValidation() { // Vérifie la présence ou non du Nom et Prénom lors de la validation du formulaire
		const validLastName = (this.lastName.validity.valueMissing == false);
		const validFirstName = (this.firstName.validity.valueMissing == false);
		if(validLastName && validFirstName) {
			this.lastNameRequired.textContent = "";
			this.firstNameRequired.textContent = "";
			popup.showPopup();
		}
		else {
			this.lastNameRequired.textContent = "Nom requis";
			this.firstNameRequired.textContent = "Prénom requis";
		}
	}
}

let form = new Form(); 