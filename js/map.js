class Map {

	constructor(map, stationMarker){
		this.map = map;
		this.markerOnStation = stationMarker;
		this.iconEmpty = L.icon({iconUrl: "images/red-marker.png", iconSize: [40, 40]});
		this.iconOpen = L.icon({iconUrl: "images/blue-marker.png", iconSize: [40, 40]});
		this.showMap();
		this.addMarker();
	}
	
	showMap() { // Intégration de la carte depuis Leaflet
		this.map = L.map('map').setView([43.296174, 5.379953], 14);

		L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiYmVuMDYiLCJhIjoiY2p0dHhyZzN5MTNnajRmcW4wdjAwZDl6cCJ9.905Vab5CQi1m7q9XF3z1fg', {
			attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
			maxZoom: 18,
			id: 'mapbox.streets',
			accessToken: 'your.mapbox.access.token'
		}).addTo(this.map);
	}

	addMarker() { // Ajoute les marqueurs depuis l'API Live JC Decaux
	  ajaxGet('https://api.jcdecaux.com/vls/v1/stations?contract=Marseille&apiKey=44de9e22e378e7bb9e96a78169c7ffe61448263b', (reponse)=> {
	        let stations = JSON.parse(reponse);
	        stations.forEach((station) => { // Ajoute les marqueurs en fonction de leur position
	        	this.addIcon(station);
	          	this.markerOnStation.on("click",() => {
                    stationData.displayInfoStation(station);
	          	})
	        });
		})
	}

	addIcon(station) { // Affiche le type de pin en fonction du nombre de vélos
		let icon = station.available_bikes === 0 ? this.iconEmpty : this.iconOpen;  //Opérateur ternaire pour afficher le bon pin
        this.markerOnStation = L.marker([station.position.lat, station.position.lng], {
            icon: icon
        }).addTo(this.map);
	}
}

let map = new Map;






