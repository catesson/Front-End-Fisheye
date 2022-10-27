//Mettre le code JavaScript lié à la page photographer.html
//récupere les données du JSON média et photographe
async function getPhotographers() {

    const reponse = await fetch("data/photographers.json");
    const photographers = await reponse.json();
    // et bien retourner le tableau photographers seulement une fois
    return (photographers) 
}
// Récupere l'id passer dans le l'url

function getId(){
    var url = new URL(document.location.href)
    var id = url.searchParams.get("id");
    return id
}
//retir tout les médias de la page photographe
function cleanMedia(){
    const visibleMedia = document.querySelector('#main .media-photographe');
    visibleMedia.innerHTML = "";
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
    const filterPhotographe = photographers.find(item => item.id == id);
    return filterPhotographe
};
//trie les médias en fonction du trie demandé
async function trierMedia(value){
   
    cleanMedia()
    cleanLightBox()

    
     // Récupere l'id passer dans le l'url
    const id = getId()
    displaynbLike(filterPhotographers(id))

    //récupere les médias de l'artiste dont l'id est dans l'url
    const medias = await filterMedia(id);

    if (value === "titre"){
        const mediasTrier = medias.sort(function(a,b) {
            const collator = new Intl.Collator('en');
            return collator.compare(a.title, b.title);
         });
         displayMedia(mediasTrier);
         
    }
     else if (value === "date"){
        const mediasTrier = medias.sort((a,b) => a.date - b.date);
        displayMedia(mediasTrier);
     } else if (value === "popularite"){
        const mediasTrier = medias.sort((a,b) => b.likes - a.likes);
        displayMedia(mediasTrier);
     }

    
}
async function displaynbLike(photographer){

    //recupere le nombre de like
    const photogaphe = photographerFactory(photographer);
    const nbLikes = await photogaphe.getLikes();

    //affichage du nombre de like
    const pLike = document.querySelector(".info .info_like");
    pLike.innerHTML = nbLikes;
}

function displayMedia(medias){
    const mediaPhotographe = document.querySelector(".media-photographe");

    medias.forEach((medias) => {        
        
          //affiche les images du photographe
        const media = mediaFactory(medias); 
        const mediaDOM = media.getMediaDOM(medias); 
        mediaPhotographe.appendChild(mediaDOM);  

        //crée le carrouselle pour la lightBox
        createLightBox(media);        
    })
    
}
async function displayData(photographer, medias) {

    //fonction d'affichage des data
    const page = document.querySelector('body')
    const photographerHeader = document.querySelector(".photograph-header");
    


    //affiche le photographe
        const photographerModel = photographerFactory(photographer);
        const profilDOM = photographerModel.getProfil();
       //const infoDOM = photographerModel.getPrice();
        photographerHeader.appendChild(profilDOM);
       // page.appendChild(infoDOM);
       const prix = document.querySelector(".info .info_price");
       prix.textContent = photographer.price +"€ / Jour";


    displayMedia(medias);
    displaynbLike(photographer);
    
    
};

async function init() {
    const id = getId()
    // Récupère les datas des photographes
    const photographer = await filterPhotographers(id)
    const media = await filterMedia(id)

    
    
    //trier au changement d'option de tire
    const select = document.querySelector("#trier");
    console.log(select)
    select.addEventListener('change', e => {
        const sorter = e.target.value
        trierMedia(sorter)
    })
    
    displayData(photographer, media);
};

//gestion du clavier

init()

window.addEventListener("keydown", function(e) {
    const keyCode = e.keyCode ? e.keyCode : e.which
    if (keyCode === 39) {
        nextPicture()
    } else if (keyCode === 37) {
        lastPicture();
    }else if (keyCode == 27 ){
        closelightBox();
        closeModal();
    }
    
 })
