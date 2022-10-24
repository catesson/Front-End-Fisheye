
//affichage de la modale Lightbox
function displaylightBox(imageID) {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    const modal = document.querySelector(".lightBox");
    const main = document.querySelector("#main");
    const image = document.getElementById(imageID);
    image.className += " current";
	modal.style.display = "flex";
    modal.ariaHidden = false;
    main.ariaHidden = true;
}
function cleanLightBox(){
    const modal = document.querySelector(".lightBox_ul");
    modal.innerHTML=" ";
}
//fermeture de la modale LightBox
function closelightBox() {
    const modal = document.querySelector(".lightBox");
    const main = document.querySelector("#main");

    //met en display none toute les images
    const image = document.querySelectorAll('.lightBox_ul--li + .current');
     image.forEach(image => {
        image.className = "lightBox_ul--li";
    });
    // met en display none la modale + gestion du ariahidden
    modal.style.display = "none";
    modal.ariaHidden = true;
    main.ariaHidden = false;
}
//fonction de création du carouselle lightBox
function createLightBox(medias){
        const lightBox = document.querySelector(".lightBox_ul");
        const lightBoxPicture = document.createElement('li');
        const contentImg = document.createElement('div');
        const prev = document.createElement('img');
        
        const next = document.createElement('img');
        const title = document.createElement('h2');

        
        lightBoxPicture.className = 'lightBox_ul--li';
        lightBoxPicture.setAttribute('id', medias.id)
        contentImg.className="lightBox_content";
        
        prev.setAttribute('src', "assets/icons/arrow.svg");
        prev.className= "prev";
        prev.onclick = function () {lastPicture(medias.id)};
        next.setAttribute('src', "assets/icons/arrow.svg");
        next.className = "next"
        next.onclick = function () {nextPicture(medias.id)};
        title.textContent = medias.title;
        

        lightBox.appendChild(lightBoxPicture);
        lightBoxPicture.appendChild(prev);
        lightBoxPicture.appendChild(contentImg)  
        //verifie si le media est une image ou une vidéo  
        if (medias.image){
            const image = document.createElement('img');
            image.setAttribute('src', medias.picture);
            image.className= "lightBox_img";
            contentImg.appendChild(image);
        } else if (medias.video){
            const video = document.createElement('video');
            video.setAttribute('src', medias.movie);
            video.className= "lightBox_img";
            contentImg.appendChild(video);
        }
        contentImg.appendChild(title);
        lightBoxPicture.appendChild(next);
       

        
}
//fonction pour aller à l'image suivante du carousel
function nextPicture(){
    const carousel = document.querySelector('.lightBox_ul');
    const carouselItem = document.querySelector('.lightBox_ul--li.current');
    console.log(carouselItem);
    //test si élément suivant existe ou pas
    if (carouselItem.nextElementSibling){
        carouselItem.className = "lightBox_ul--li";
        carouselItem.nextElementSibling.className += " current";
    }else {
        carouselItem.className = "lightBox_ul--li";
        carousel.firstElementChild.className += " current";
    }

}
//fonction pour aller à l'image précédente du carousel
function lastPicture(){
    const carousel = document.querySelector('.lightBox_ul');
    const carouselItem = document.querySelector('.lightBox_ul--li.current');
    
    //test si élément précédent existe ou pas
    if (carouselItem.previousElementSibling){
        carouselItem.className = "lightBox_ul--li";
        carouselItem.previousElementSibling.className += " current";
    } else {
        carouselItem.className = "lightBox_ul--li";
        carousel.lastElementChild.className += " current";
    }
    
}




 