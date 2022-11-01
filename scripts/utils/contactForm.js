
// concerver le target dans la modal
function trapFocus(element) {
    var focusableEls = element.querySelectorAll('a[href], button, textarea, input, input, input, select');
    var firstFocusableEl = focusableEls[0];  
    firstFocusableEl.focus();
    var lastFocusableEl = focusableEls[focusableEls.length - 1];
    var KEYCODE_TAB = 9;
  
    element.addEventListener('keydown', function(e) {
      var isTabPressed = (e.key === 'Tab' || e.keyCode === KEYCODE_TAB);
  
      if (!isTabPressed) { 
        return; 
      }
  
      if ( e.shiftKey ) /* shift + tab */ {
        if (document.activeElement === firstFocusableEl) {
          lastFocusableEl.focus();
            e.preventDefault();
          }
        } else /* tab */ {
        if (document.activeElement === lastFocusableEl) {
          firstFocusableEl.focus();
            e.preventDefault();
          }
        }
    });
  }             


//affiche la modal de contact
function displayModal() {
    const modal = document.getElementById("contact_modal");
    
    
    //met le nom du photographe dans le titre
    personaliserModal();
    const main = document.querySelector("#main");
	modal.style.display = "block";
    modal.ariaHidden = false;
    modal.ariaHasPopup = "dialog";
    modal.ariaModal= "true";
    modal.setAttribute('role', "dialog")
    main.ariaHidden = true;
    trapFocus(modal);

    //gestion de la visibility
    //main.style.visibility="hidden";
    //header.style.visibility="hidden";
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

///test trap focus modal 

