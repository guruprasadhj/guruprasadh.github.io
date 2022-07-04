window.addEventListener("load",()=>{
    document.querySelector(".main").classList.remove("hidden");
    document.querySelector(".home-section").classList.add("active");
    /*-------    Page Loader   -------*/
    document.querySelector(".page-loader").classList.add("fade-out");
    setTimeout(()=>{
        document.querySelector(".page-loader").style.display ="none";
    },500);
});

/*---------------------My Try ---------------------------------*/
let nextPage=false;
var isDone =false;
window.onscroll = function() {
    
    var distanceScrolled = document.documentElement.scrollTop;
    console.log('Scrolled: ' + distanceScrolled);
    if ((window.innerHeight + window.scrollY) <= (document.body.offsetHeight-1))
        //distanceScrolled<=100
        {
        console.log("First page");
        console.log(window.innerHeight + window.scrollY);
        console.log(document.body.offsetHeight);
        //
        if(nextPage){
            isDone=false;
            nextPage=false;
        }
        
        
    }else{
        console.log("next page");
        if(isDone==false){
             console.log(" you're at the bottom of the page");
             console.log(isDone)
            hideSection();
            toggleNavbar(); 
            document.body.classList.toggle("hide-scrolling")
            nextPage=true;
            isDone = true;            
        }else{
            console.log("is Done")
            
            
        }
              
    }
}


/*---------------------Toggle navbar----------------------------*/
const navToggler = document.querySelector(".nav-toggler");

navToggler.addEventListener("click", () =>{
    hideSection();
    toggleNavbar();
    document.body.classList.toggle("hide-scrolling")
});

function hideSection(){
    document.querySelector("section.active").classList.toggle("fade-out"); 
}
function toggleNavbar(){
    document.querySelector(".header").classList.toggle("active");
}
/*---------------- Active Section ------------*/
document.addEventListener("click",(e) =>{
    if(e.target.classList.contains("link-item")&& e.target.hash !==""){
        const hash = e.target.hash;
        //activate overlay to prevent multiple clicks
        document.querySelector(".overlay").classList.add("active");
        navToggler.classList.add("hide");
        console.log(hash );
        if(e.target.classList.contains("nav-item")){
            console.log("true");
            toggleNavbar();
        }else{
            console.log("false");
        }
        setTimeout(()=>{
            document.querySelector("section.active").classList.remove("active","fade-out");
            document.querySelector(e.target.hash).classList.add("active");
            window.scrollTo(0,0);
            document.body.classList.remove("hide-scrolling");
            navToggler.classList.remove("hide");
            document.querySelector(".overlay").classList.remove("active");
        },500);
    }
});

/*---------------- About Tab  ---------------*/
const tabsContainer = document. querySelector(".about-tabs");
aboutSection = document.querySelector(".about-section");


tabsContainer.addEventListener("click", (e) => {
    if(e.target.classList.contains("tab-item") && !e.target.classList.contains("active")){
        tabsContainer.querySelector(".active").classList.remove("active");   
        e.target.classList.add("active");
        const target = e.target.getAttribute("data-target");
        aboutSection.querySelector(".tab-content.active").classList.remove("active");
        aboutSection.querySelector(target).classList.add("active");
    }
});
/*--------- Portfolio Item Details Popup ----------*/
document.addEventListener("click",(e)=>{ if(e.target.classList.contains("view-project-btn")){
        togglePortfolioPopup();
        document.querySelector(".portfolio-popup").scrollTo(0,0);
        portfolioItemDetails(e.target.parentElement);
    }
});
function togglePortfolioPopup(){
    document.querySelector(".portfolio-popup").classList.toggle("open");
    document.body.classList.toggle("hide-scrolling");
    document.querySelector(".main").classList.toggle("fade-out");
}
document.querySelector(".pp-close").addEventListener("click",togglePortfolioPopup);

// hide pop-up when coding outside of it
document.addEventListener("click", (e)=> {
    if(e.target.classList.contains("pp-inner")){
        togglePortfolioPopup();
    }
});

function portfolioItemDetails(portfolioItem){
    document.querySelector(".pp-thumbnail img").src=
    portfolioItem.querySelector(".portfolio-item-thumbnail img").src;

    document.querySelector(".pp-header h3").innerHTML = 
    portfolioItem.querySelector(".portfolio-item-title").innerHTML;
    
    document.querySelector(".pp-body").innerHTML = 
    portfolioItem.querySelector(".portfolio-item-details").innerHTML;
    
}

