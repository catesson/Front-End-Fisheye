function photographerFactory(data) {
    const { name, portrait,id,city,country,tagline,price} = data;
    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {

        //déclaration et intégration du contenu des bloc HTML
        const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        const localisation = document.createElement( 'p' );
        localisation.textContent = city + ", " + country;
        const slogan = document.createElement( 'p' );
        slogan.textContent = tagline;
        const prix = document.createElement('p')
        prix.textContent = price + '€/jour' ;

        //ajout des class
        localisation.className = 'photographer_section--localisation'
        slogan.className = 'photographer_section--slogan'
        prix.className = 'photographer_section--prix'

        // liaison au parent 
        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(localisation);
        article.appendChild(slogan);
        article.appendChild(prix);
        
        return (article);
    }
    return { name, picture, getUserCardDOM }
}