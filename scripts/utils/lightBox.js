//affichage de la modale Lightbox
export function displaylightBox(imageID) {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  const modal = document.querySelector(".lightBox");
  const main = document.querySelector("#main");
  const header = document.querySelector("#header");
  const image = document.getElementById(imageID);
  image.className += " current";
  modal.style.display = "flex";
  modal.ariaHidden = false;
  main.ariaHidden = true;
  main.style.visibility = "hidden";
  header.style.visibility = "hidden";
  //fait le focus sur l'image ou la vidéo
  document
    .querySelector(".lightBox_ul--li.current .lightBox_content h2")
    .nextElementSibling.focus();
}
export function cleanLightBox() {
  const modal = document.querySelector(".lightBox_ul");
  modal.innerHTML = " ";
}
//fermeture de la modale LightBox
export function closelightBox() {
  const modal = document.querySelector(".lightBox");
  const main = document.querySelector("#main");
  const header = document.querySelector("#header");

  //met en display none toute les images
  const image = document.querySelectorAll(".lightBox_ul--li.current");
  image.forEach((image) => {
    image.className = "lightBox_ul--li";
  });
  // met en display none la modale + gestion du ariahidden
  modal.style.display = "none";
  modal.ariaHidden = true;
  main.ariaHidden = false;
  main.style = "";
  header.style = "";
  document.querySelector("#logo").focus();
}
//fonction de création du carouselle lightBox
export function createLightBox(medias) {
  //création des éléments
  const lightBox = document.querySelector(".lightBox_ul");
  const lightBoxPicture = document.createElement("li");
  const contentImg = document.createElement("div");
  const linkPrev = document.createElement("a");
  const linkNext = document.createElement("a");
  const prev = document.createElement("img");
  const next = document.createElement("img");
  const title = document.createElement("h2");

  //ajout des attribue et nom de class
  lightBoxPicture.className = "lightBox_ul--li";
  lightBoxPicture.setAttribute("id", medias.id);
  contentImg.className = "lightBox_content";
  linkPrev.className = "prev";
  linkNext.className = "next";
  linkNext.href = "";
  linkNext.ariaLabel = "next image";
  linkPrev.href = "";
  linkPrev.ariaLabel = "previous image";
  next.setAttribute("alt", "next image");
  prev.setAttribute("alt", "previous image");
  prev.setAttribute("src", "assets/icons/arrow.svg");

  linkPrev.onclick = function () {
    event.preventDefault();
    lastPicture(medias.id);
  };
  next.setAttribute("src", "assets/icons/arrow.svg");

  linkNext.onclick = function () {
    event.preventDefault();
    nextPicture(medias.id);
  };
  title.textContent = medias.title;

  //liaison entre bloc enfant et parent
  lightBox.appendChild(lightBoxPicture);
  lightBoxPicture.appendChild(linkPrev);
  linkPrev.appendChild(prev);
  lightBoxPicture.appendChild(contentImg);
  lightBoxPicture.appendChild(linkNext);
  linkNext.appendChild(next);
  contentImg.appendChild(title);

  //verifie si le media est une image ou une vidéo
  if (medias.image) {
    const image = document.createElement("img");
    image.setAttribute("tabindex", "0");
    image.setAttribute("src", medias.picture);
    image.ariaLabel = medias.title;
    image.className = "lightBox_img";
    contentImg.appendChild(image);
  } else if (medias.video) {
    const video = document.createElement("video");
    video.setAttribute("tabindex", "0");
    video.setAttribute("controls", "true");
    video.setAttribute("src", medias.movie);
    video.ariaLabel = medias.title;
    video.className = "lightBox_img";
    contentImg.appendChild(video);
  }
}
//fonction pour aller à l'image suivante du carousel
export function nextPicture() {
  const carousel = document.querySelector(".lightBox_ul");
  const carouselItem = document.querySelector(".lightBox_ul--li.current");
  console.log(carouselItem);
  //test si élément suivant existe ou pas
  if (carouselItem.nextElementSibling) {
    carouselItem.className = "lightBox_ul--li";
    carouselItem.nextElementSibling.className += " current";
    document
      .querySelector(".lightBox_ul--li.current .lightBox_content h2")
      .nextElementSibling.focus();
  } else {
    carouselItem.className = "lightBox_ul--li";
    carousel.firstElementChild.className += " current";
    document
      .querySelector(".lightBox_ul--li.current .lightBox_content h2")
      .nextElementSibling.focus();
  }
}
//fonction pour aller à l'image précédente du carousel
export function lastPicture() {
  const carousel = document.querySelector(".lightBox_ul");
  const carouselItem = document.querySelector(".lightBox_ul--li.current");

  //test si élément précédent existe ou pas
  if (carouselItem.previousElementSibling) {
    carouselItem.className = "lightBox_ul--li";
    carouselItem.previousElementSibling.className += " current";
    document
      .querySelector(".lightBox_ul--li.current .lightBox_content h2")
      .nextElementSibling.focus();
  } else {
    carouselItem.className = "lightBox_ul--li";
    carousel.lastElementChild.className += " current";
    document
      .querySelector(".lightBox_ul--li.current .lightBox_content h2")
      .nextElementSibling.focus();
  }
}
