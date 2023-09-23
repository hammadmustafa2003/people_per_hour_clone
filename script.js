function leftscroll(){
    document.getElementById('categoryBar').scrollBy(200,0);
}

function rightscroll(){
    document.getElementById('categoryBar').scrollBy(-200,0);
}

// document.addEventListener("DOMContentLoaded", function () {
navbar_active = false;
setInterval(function(){
    const categoryBar = document.getElementById('categoryBar');
    const scrollRight = document.getElementById('scrollRight');
    const scrollLeft = document.getElementById('scrollLeft');

    // Check if the categoryBar overflows
    if (categoryBar.scrollWidth > categoryBar.clientWidth) {
        scrollRight.style.display = 'block';
        scrollLeft.style.display = 'block';
        categoryBar.style.justifyContent = 'flex-start';
    } else {
        scrollRight.style.display = 'none';
        scrollLeft.style.display = 'none';
        categoryBar.style.justifyContent = 'center';
    }
},500);

function toggleMenu(){
    const navbar = document.getElementById('navbar-mobile');
    const main_content = document.getElementById('main-content');
    // navbar_mobile_btn = ;

    if(navbar_active){
        navbar.classList.remove('navbar-mobile');
        navbar.classList.add('navbar-mobile-transparent');
        document.getElementById('navbar-mobile-btn').src = 'assets/images/menu.svg';
        translateStr = "-"+document.getElementById('navbar-mobile').offsetWidth.toString()+"px 0" ;
        document.getElementsByTagName('header')[0].style.translate = translateStr;
        document.getElementsByClassName("content")[0].style.translate = translateStr
    }
    else{
        navbar.classList.add('navbar-mobile');
        navbar.classList.remove('navbar-mobile-transparent');
        document.getElementById('navbar-mobile-btn').src = 'assets/images/close.png';
        translateStr = "-"+document.getElementById('navbar-mobile').offsetWidth.toString()+"px 0" ;
        document.getElementsByTagName('header')[0].style.translate = translateStr;
        document.getElementsByClassName("content")[0].style.translate = translateStr
    }
    navbar_active = !navbar_active;
}

//display: none;
// opacity: 0;
// position: fixed;
// top: 0;
// left: 0;
// z-index: -1;
  