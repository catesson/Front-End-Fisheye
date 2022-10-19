//Mettre le code JavaScript lié à la page photographer.html
//récupere les données du JSON média et photographe
async function getPhotographers() {

    const reponse = await fetch("data/photographers.json");
    const photographers = await reponse.json();
    // et bien retourner le tableau photographers seulement une fois
    return (photographers) 
}

// filtre les média et les photogaphe
async function filterMedia(id) {

    // Récupère les média du photographe dont c'est l'id
    const { media } = await getPhotographers();
    const filterMedia = media.filter(item => item.photographerId == id);
    return filterMedia
};

async function filterPhotographers(id) {

    // Récupère les datas du photographe dont c'est l'id
    const { photographers } = await getPhotographers();
    const filterPhotographe = photographers.filter(item => item.id == id);
    return filterPhotographe
};

async function displayData(photographer, medias, nbLikes) {

    //fonction d'affichage des data
    const page = document.querySelector('body')
    const photographerHeader = document.querySelector(".photograph-header");
    const mediaPhotographe = document.querySelector(".media-photographe");

    photographer.forEach((photographer) => {

        const photographerModel = photographerFactory(photographer);
        const profilDOM = photographerModel.getProfil();
       //const infoDOM = photographerModel.getPrice();
        photographerHeader.appendChild(profilDOM);
       // page.appendChild(infoDOM);
       const prix = document.querySelector(".info .info_price");
       prix.textContent = photographer.price +"€ / Jour";

    })

    //affiche les images du photographe
    medias.forEach((medias) => {        

        
        const media = mediaFactory(medias); 
        const mediaDOM = media.getMediaDOM(medias); 
        mediaPhotographe.appendChild(mediaDOM);  

        //crée le carrouselle pour la lightBox
        createLightBox(media);
          

    })

    //affichage du nombre de like
    const pLike = document.querySelector(".info .info_like");
    pLike.innerHTML = nbLikes;
    
};

async function init() {

    // Récupere l'id passer dans le l'url
    var url = new URL(document.location.href)
    var id = url.searchParams.get("id");

    // Récupère les datas des photographes
    const photographer = await filterPhotographers(id)
    const media = await filterMedia(id)

    //recupere le nombre de like
    const photogaphe = photographerFactory(photographer);
    const nbLikes = await photogaphe.getLikes();


    displayData(photographer, media, nbLikes);
};

init()