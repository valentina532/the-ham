
window.onload = function () {
    /*-----------------------clicks on services------------------*/
    let li = document.getElementsByClassName("show-li");
    let sqr = document.getElementsByClassName("sqr")
    let p = document.getElementById("p");
    let img = document.getElementById("img1");

    li[0].style.backgroundColor = "#18cfab";
    li[0].style.color = "white";

    function clearStyle() {
        for (let i = 0; i < li.length; i++) {
            li[i].style.backgroundColor = "#ebecec";
            li[i].style.color = "#878889";
        }
    }
    function hideSqr() {
        for (let j = 0; j < sqr.length; j++) {
            sqr[j].style.display = "none";
        }
    }

    li[0].onclick = function () {
        clearStyle();
        hideSqr();
        this.style.backgroundColor = "#18cfab";
        this.style.color = "white";
        sqr[0].style.display = "block";
        img.src = "images/service1.jpg";
        p.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adip isicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. "
    }
    li[1].onclick = function () {
        clearStyle();
        hideSqr();
        this.style.backgroundColor = "#18cfab";
        this.style.color = "white";
        sqr[1].style.display = "block";
        img.src = "images/service2.jpg";
        p.innerHTML = "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis "
    }
    li[2].onclick = function () {
        clearStyle();
        hideSqr();
        this.style.backgroundColor = "#18cfab";
        this.style.color = "white";
        sqr[2].style.display = "block";
        img.src = "images/service3.jpg";
        p.innerHTML = "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
    }
    li[3].onclick = function () {
        clearStyle();
        hideSqr();
        this.style.backgroundColor = "#18cfab";
        this.style.color = "white";
        sqr[3].style.display = "block";
        img.src = "images/service4.jpg";
        p.innerHTML = "Contrairement à une opinion répandue, le Lorem Ipsum n'est pas simplement du texte aléatoire. Il trouve ses racines dans une oeuvre de la littérature latine classique datant de 45 av. J.-C., le rendant vieux de 2000 ans. Un professeur du Hampden-Sydney College, en Virginie, s'est intéressé à un des mots latins les plus obscurs, consectetur, extrait d'un passage du Lorem Ipsum, et en étudiant tous les usages de ce mot dans la littérature classique, découvrit la source incontestable du Lorem Ipsum. Il provient en fait des sections 1.10.32 et 1.10.33 du De Finibus Bonorum "
    }
    li[4].onclick = function () {
        clearStyle();
        hideSqr();
        this.style.backgroundColor = "#18cfab";
        this.style.color = "white";
        sqr[4].style.display = "block";
        img.src = "images/service5.jpg";
        p.innerHTML = "Plusieurs variations de Lorem Ipsum peuvent être trouvées ici ou là, mais la majeure partie d'entre elles a été altérée par l'addition d'humour ou de mots aléatoires qui ne ressemblent pas une seconde à du texte standard. Si vous voulez utiliser un passage du Lorem Ipsum, vous devez être sûr qu'il n'y a rien d'embarrassant caché dans le texte. Tous les générateurs de Lorem Ipsum sur Internet tendent à reproduire le même extrait sans fin, ce qui fait de lipsum.com le seul vrai générateur de Lorem Ipsum. Iil utilise un dictionnaire de plus de 200 mots latins, en"
    }
    li[5].onclick = function () {
        clearStyle();
        hideSqr();
        this.style.backgroundColor = "#18cfab";
        this.style.color = "white";
        sqr[5].style.display = "block";
        img.src = "images/service6.jpg";
        p.innerHTML = "Virginie, s'est intéressé à un des mots latins les plus obscurs, consectetur, extrait d'un passage du Lorem Ipsum, et en étudiant tous les usages de ce mot dans la littérature classique, découvrit la source incontestable du Lorem Ipsum. Il provient en fait des sections 1.10.32 et 1.10.33 du De Finibus Bonorum et Malorum (Des Suprêmes Biens et des Suprêmes Maux) de Cicéron. Cet ouvrage, très populaire pendant la Renaissance, est un traité sur la théorie de l'éthique. Les premières lignes du Lorem Ipsum, Lorem ipsum dolor sit amet.., proviennent de la section 1.10.32";
    }

    /* ---------------Amasing works - loading 12 pictures---------------- */
    let buttonload = document.getElementById("buttonload");
    let loadedImages = document.getElementsByClassName("loaded");    
    let default_images = document.getElementsByClassName("default");
    let all_images = document.getElementsByClassName("all");

// preloader
    function preloading(){
        preloader.style.display = "block";

    }
 

    buttonload.onclick = function (){   
        preloading();  
        buttonload.style.display = "none";
        setTimeout(function(){
            for (let i = 0; i < loadedImages.length; i++) {
            loadedImages[i].style.display = "block";
            buttonload.style.display = "none";
              preloader.style.display = "none";
        }
        }, 2000)
        
    } 

    function resetTopBorder(){
        all.style.borderTop = "1px solid #ebecec"; 
        gr_design.style.borderTop = "1px solid #ebecec";
        web_design.style.borderTop = "1px solid #ebecec";
        land_page.style.borderTop = "1px solid #ebecec";
        word_press.style.borderTop = "1px solid #ebecec";
    }

    function shawAll(){
        for(let k = 0; k < all_images.length; k++){
            all_images[k].style.display = "block";
            resetTopBorder();
            buttonload.style.display = "none";
        }
    }
    function shawDefault(){
        for(let k = 0; k < default_images.length; k++){
            default_images[k].style.display = "block";
            buttonload.style.display = "block";
        }
    }
    function hideAll(){
        for(let k = 0; k < all_images.length; k++){
            all_images[k].style.display = "none";
            buttonload.style.display = "none";
            resetTopBorder();
        }
    }

    all.onclick = function(){
        hideAll();
        shawDefault();
        this.style.borderTop = "2px solid  #18cfab";
    }
    gr_design.onclick = function(){
        hideAll();
        this.style.borderTop = "2px solid  #18cfab";
        for(let j = 0; j < all_images.length; j++){
          if (all_images[j].matches('[alt^="gr_design"]')) {all_images[j].style.display = "block";}
        }
     }
      web_design.onclick = function(){
        hideAll();
        this.style.borderTop = "2px solid  #18cfab";
        for(let j = 0; j < all_images.length; j++){
          if (all_images[j].matches('[alt^="web_design"]')) {all_images[j].style.display = "block";}
        }
     }

    land_page.onclick = function(){
        hideAll();
        this.style.borderTop = "2px solid  #18cfab";
        for(let j = 0; j < all_images.length; j++){
          if (all_images[j].matches('[alt^="land_page"]')) {all_images[j].style.display = "block";}
        }
     }
  word_press.onclick = function(){
        hideAll();
        this.style.borderTop = "2px solid  #18cfab";
        for(let j = 0; j < all_images.length; j++){
          if (all_images[j].matches('[alt^="word_press"]')) {all_images[j].style.display = "block";}
        }
     }
 

 // search icon
    let search = document.getElementsByClassName("material-icons")[0];
     let inp = document.createElement("input");
     inp.setAttribute("type", "search");
     inp.style.color = "white"
   
    search.onclick = function(){
        list.appendChild(inp);
        inp.classList.add("search");
    }
    inp.onblur = function(){
        if(!inp.value){
            list.removeChild(inp);   
        }
        
    }




} 

    





