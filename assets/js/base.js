var iconMenu=document.querySelector('.header__wrapper-icon');
var menu=document.querySelector('.header__showMenu');
var mobileTabletMenu=document.querySelector('.header__nav-mobile-tablet-list.open-on-tablet-moblie')
var overlayMobileTalet=document.querySelector('.overlay')
iconMenu.onclick= function(){
    menu.classList.add('fadeIn')   
    mobileTabletMenu.classList.add('fadeIn')
    overlayMobileTalet.classList.add('fadeIn');
    overlayMobileTalet.style.zIndex=2;   
}
var iconClose=document.querySelector('.header__showMenu-icon-close');
var iconCloseMobile=document.querySelector('.header__nav-mobile-tablet-icon-close')
iconCloseMobile.onclick=function(e){
    mobileTabletMenu.classList.remove('fadeIn')
    overlayMobileTalet.classList.remove('fadeIn')
    overlayMobileTalet.style.zIndex=-1;
    e.stopPropagation();
}
iconClose.onclick= function(e){
    menu.classList.remove('fadeIn')  
    overlayMobileTalet.classList.remove('fadeIn')
    overlayMobileTalet.style.zIndex=-1;     
    e.stopPropagation();
}
overlayMobileTalet.onclick= function(e){
    mobileTabletMenu.classList.remove('fadeIn')
    overlayMobileTalet.classList.remove('fadeIn')
    menu.classList.remove('fadeIn')
    overlayMobileTalet.style.zIndex=-1;
    e.stopPropagation();
}