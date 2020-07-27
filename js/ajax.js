//Exécute un appel AJAX GET
//Appel de page pour récupération de données via http
function ajaxGet(url, callback) { // Prend en paramètres l'URL cible et 
	const req = new XMLHttpRequest(); // la fonction callback appelée en cas de succès
	req.open("GET", url);
	req.addEventListener("load", function () {
		if (req.status >= 200 && req.status < 400) {
			callback(req.responseText); // Appelle la fonction callback en lui passant 
		} else {						// la réponse de la requête
			console.error(req.status + " " + req.statusText + " " + url);
		}
	});
	req.addEventListener("error", function () {
		console.error("Erreur réseau avec l'URL " + url);
	});
	req.send(null);
}
