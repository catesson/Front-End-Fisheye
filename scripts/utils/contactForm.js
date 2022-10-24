function displayModal() {
    const modal = document.getElementById("contact_modal");
    document.getElementById("prenom").focus();
    const main = document.querySelector("#main");
	modal.style.display = "block";
    modal.ariaHidden = false;
    modal.ariaHasPopup = "dialog";
    modal.ariaModal= "true";
    modal.setAttribute('role', "dialog")
    main.ariaHidden = true;
}

function closeModal() {
    const modal = document.getElementById("contact_modal");
    const main = document.querySelector("#main");
    modal.style.display = "none";
    modal.ariaHasPopup = " ";
    modal.setAttribute('role', " ")
    modal.ariaHidden = true;
    main.ariaHidden = false;
}

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

