function mediaFactory(data){
    let media = "";

    //test si c'est une image ou une vidéo
    if(data.image){
        media = createImg(data)
    }
    else if (data.video){
        media = createVideo(data)
    } else{
        throw "erreur de type"
    } 

    //fonction de création d'image
    function createImg(data){
    const {id,photographerId,title,image,likes,date,price} = data;
    const picture = `assets/medias/${image}`;

        //affichage des image dans le dom
        function getMediaDOM(){
            //délcalration des éléments du dom
            const article = document.createElement( 'article');
            const link = document.createElement( 'a');
            link.ariaLabel = media.title;
            link.href =""
;               
            const image = document.createElement( 'img' );
            image.setAttribute("src", picture);
            image.setAttribute("alt", `image ${media.title}`);
            link.onclick = function () {event.preventDefault();
                displaylightBox(id)
            };

            const contenu =document.createElement( 'div' );

            const title = document.createElement( 'h2' );
            title.textContent = media.title;

            const nbLike = document.createElement( 'p' );
            nbLike.textContent = likes;

            const coeur = document.createElement( 'img' );
            coeur.setAttribute("src","assets/icons/heart.svg");
            //Ajout d'un like sur l'image et sur le total
            coeur.onclick = function() {
                nbLike.textContent = likes+1;
                const nbLikeTotal = document.querySelector(".info .info_like");
                nbLikeTotal.textContent= parseInt(nbLikeTotal.textContent)+1;
                this.onclick = undefined;
            }

            // attribution des éléments au parent
            article.appendChild(link);                  
            link.appendChild(image);
            article.appendChild(contenu);
            contenu.appendChild(title);
            contenu.appendChild(nbLike);
            contenu.appendChild(coeur);
            
            return article

        }
        return {id,photographerId,title,image,likes,date,price, picture, getMediaDOM}
    }

    //focntion de création de vidéo
    function createVideo(data){
        const {id,photographerId,title,video,likes,date,price} = data;
        const movie = `assets/medias/${video}`;

        //affichage des videos dans le dom
        function getMediaDOM(){
            //délcalration des éléments du dom
            const article = document.createElement( 'article');
            const link = document.createElement( 'a');
            link.ariaLabel = media.title;
           

            const contenu =document.createElement( 'div' );

            const videos = document.createElement('video');
            videos.setAttribute("src", movie );
            link.onclick = function () {event.preventDefault()
                displaylightBox(id)
            };

            const title = document.createElement( 'h2' );
            title.textContent = media.title;

            const nbLike = document.createElement( 'p' );
            nbLike.textContent = likes;

            const coeur = document.createElement( 'img' );
            coeur.setAttribute("src","assets/icons/heart.svg");
            //Ajout d'un like sur l'image et sur le total
            coeur.onclick = function() {
                nbLike.textContent = likes+1;
                const nbLikeTotal = document.querySelector(".info .info_like");
                nbLikeTotal.textContent= parseInt(nbLikeTotal.textContent)+1;
                this.onclick = undefined;
            }

            // attribution des éléments au parent
            article.appendChild(link);            
            link.appendChild(videos);
            article.appendChild(contenu);
            contenu.appendChild(title);
            contenu.appendChild(nbLike);
            contenu.appendChild(coeur);
            
            return article
        }
        return {id,photographerId,title,video,likes,date,price, movie, getMediaDOM}
    }
    
    return media;
        
}

