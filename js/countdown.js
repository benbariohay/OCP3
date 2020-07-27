class Timer {

    constructor() {
        this.counter = document.getElementById("counter");
        this.button = document.getElementById("button");
        this.secondes = 60;
        this.minutes = 19;
        this.current_secs;
        this.current_mins;
        this.ifstorage();
        // this.iTimer = null;
    }

    ifstorage() { // vérifie la présence du compte à rebours dans le sessionStorage pour qu'il se poursuive 
        if (sessionStorage.getItem("Secondes")) {
            clearInterval(this.iTimer);
            this.secondes = sessionStorage.getItem("Secondes");
            this.minutes = sessionStorage.getItem("Minutes");
            this.iTimer = setInterval(() => this.secondesCounting(), 1000);
            this.running();
            booking.bookingDataTimer.style.display = "flex";
			booking.noReservation.style.display = "none";
			booking.lastNameBook.textContent = " " + sessionStorage.getItem("Last Name");     
			booking.firstNameBook.textContent = sessionStorage.getItem("First Name");  
			booking.adressBook.textContent = sessionStorage.getItem("Adress"); 
        }
    }

    secondesCounting() { // Fonctionnement principal du compte à rebours
        if (this.secondes > 0) {
            this.secondes--;
            this.current_secs = this.secondes;
            this.current_mins = this.minutes;
            this.addTextContent()
            this.storage();
        } else if (this.secondes == 0 && this.minutes > 0) {
            this.secondes = 59;
            this.minutes--;
            this.current_secs = this.secondes;
            this.current_mins = this.minutes;
            this.addTextContent();
            this.storage();
         } else if (this.secondes == 0 && this.minutes == 0) {
            clearInterval(this.iTimer);
            sessionStorage.clear();
            booking.bookingDataTimer.style.display = "none";
            booking.noReservation.style.display = "block";
            booking.noReservation.textContent = "Réservation expirée";
        }
    }

    running() { // Initialise le fonctionnement
        this.secondesCounting(); 
    }

    addTextContent() { // Affiche le compte à rebours dans la réservation en cours
        this.counter.textContent = this.current_mins + ":" + (this.current_secs < 10 ? "0" : "") + this.current_secs;
    }

    storage() { // Stocke le compte à rebours dans le sessionStorage
        sessionStorage.setItem("Secondes", this.current_secs);
        sessionStorage.setItem("Minutes", this.current_mins);
    }
}

let countdown = new Timer();
