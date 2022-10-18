
//affichage de la modale Lightbox
function displaylightBox(media, url) {
    const modal = document.querySelector(".lightBox");
    const image = document.querySelector('.lightBox_content--image')
    const titre = document.querySelector('.lightBox h2');
    titre.textContent = media.title;
    image.setAttribute('src', url)
    const main = document.querySelector("#main");
	modal.style.display = "flex";
    modal.ariaHidden = false;
    main.ariaHidden = true;
}

//fermeture de la modale LightBox
function closelightBox() {
    const modal = document.querySelector(".lightBox");
    const main = document.querySelector("#main");
    modal.style.display = "none";
    modal.ariaHidden = true;
    main.ariaHidden = false;
}
function nextPicture(){


}
function lastPicture(){
    
}