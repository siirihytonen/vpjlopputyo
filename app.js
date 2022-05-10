const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar_menu');
let info = document.querySelector(".place");
const isOn = {west:true, east:true, north:true, south:true}


function showHideinfo(input){
    
    let toToggle = document.getElementById(input);
    //isOn[input] ? toToggle.className += "hide": toToggle.classList.remove("hide");
    toToggle.classList.toggle("hide");
    isOn[input] = ! isOn[input];
    
    console.log(isOn);


}


const mobileMenu = () =>{
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
}

menu.addEventListener('click',mobileMenu);


 
const highlightMenu = () => {
    const elem=document.querySelector('.highlight');
    const homeMenu=document.querySelector('#home-page');
    const aboutMenu=document.querySelector('#about-page');
    const projectMenu=document.querySelector('#project-page');
    let scrollPos = window.scrollY;

    if(window.innerWidth>960 && scrollPos < 600){
        homeMenu.classList.add('highlight');
        aboutMenu.classList.remove('highlight');
        return
    }   else if (window.innerWidth > 960 && scrollPos < 1400){
        aboutMenu.classList.add('highlight');
        homeMenu.classList.remove('highlight');
        projectMenu.classList.remove('highlight');
        return
    }   else if(window.innerWidth > 960 && scrollPos < 2345){
        aboutMenu.classList.remove('highlight');
        projectMenu.classList.add('highlight');
        return
    }

    if((elem && window.innerWidth < 960 && scrollPos < 600) || elem){
        elem.classList.remove('highlight');
    }
}

window.addEventListener('scroll',highlightMenu);
window.addEventListener('click', highlightMenu);

const hideMobileMenu =() => {
    const menuBars = document.querySelector('is-active');
    if(window.innerWidth <=768 && menuBars){
        menu.classList.toggle('is-active');
        menuLinks.classList.remove('active');
    }

    }

menuLinks.addEventListener('click',hideMobileMenu);


function toggle(){
    var x = document.getElementById("div1");

    if(x.style.display === "none"){
        x.style.display = "block";
    }
    else{
        x.style.display ="none";
    }


}
