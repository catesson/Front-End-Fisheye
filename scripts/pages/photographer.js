//Mettre le code JavaScript lié à la page photographer.html
// Récupere l'id passer dans le l'url
var url = new URL(document.location.href)
var id = url.searchParams.get("id");