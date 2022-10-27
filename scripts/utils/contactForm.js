//affiche la modal de contact
function displayModal() {
    const modal = document.getElementById("contact_modal");
    //met le nom du photographe dans le titre
    personaliserModal();
    const main = document.querySelector("#main");
    const header=document.querySelector('#header');
	modal.style.display = "block";
    modal.ariaHidden = false;
    modal.ariaHasPopup = "dialog";
    modal.ariaModal= "true";
    modal.setAttribute('role', "dialog")
    main.ariaHidden = true;

    //gestion de la visibility
    main.style.visibility="hidden";
    header.style.visibility="hidden";
}

//fermeture de la modal contact
function closeModal() {
    const modal = document.getElementById("contact_modal");
    const main = document.querySelector("#main");
    modal.style.display = "none";
    modal.ariaHasPopup = " ";
    modal.setAttribute('role', " ")
    modal.ariaHidden = true;
    main.ariaHidden = false;
    main.style="";
    header.style="";
    //remet le focus sur le bouton contact
    document.querySelector(".contact_button").focus();
}

//envoi des informations de la modal de contact
function submitModal(){
    event.preventDefault();
    const firstName = document.querySelector('#prenom').value;
    const lastName = document.querySelector('#nom').value;
    const mail = document.querySelector('#email').value;
    const message = document.querySelector('#message').value;
    console.log(`Prenom : ${firstName}, Nom : ${lastName}, Email : ${mail}`); 
    console.log(`Message : ${message}`)
    closeModal();
}

async function personaliserModal(){
    const titre = document.querySelector(".modal_titre h1");
    const modal = document.getElementById("contact_modal");
    const id = getId() ;
    const photogaphe = await filterPhotographers(id);
    console.log(titre)
    titre.innerHTML = "Contactez-moi </br>" + photogaphe.name;
    modal.ariaLabel = "Contact me " + photogaphe.name;
    

}