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
var d,m,h,s;
function newYear()
{
    
    
    var str='Jan 1 2022 0:0:00'
    var count=new Date(str).getTime();
    var date=new Date().getTime();
    var tru=count-date;    
    if(tru < 0)
   {
    document.querySelector('.day').innerText='000'
    document.querySelector('.hour').innerText='00'
    document.querySelector('.minutes').innerText='00'
    document.querySelector('.second').innerText='00'  
    clearInterval(time)
    return;
   }
    var seconds=1000;
    var mininutes=seconds*60;
    var hour=mininutes*60;
    var day=hour*24;
    d=Math.floor(tru/day);
    h=Math.floor((tru%day)/hour);
    m=Math.floor((tru%hour)/mininutes);
    s=Math.floor((tru%mininutes)/seconds);
    if(s<10)
    s='0' + s;
    if(m<10)
    m='0' + m;
    if(h<10)
    h='0' + h;    
    if(d<100)
    d='0' + d;
    if(d<10)
    d='0' + d;
    document.querySelector('.day').innerText=d
    document.querySelector('.hour').innerText=h
    document.querySelector('.minutes').innerText=m
    document.querySelector('.second').innerText=s          
}
var time=setInterval(function(){
    newYear();
},1000)
var chuyenanh=document.querySelector('.container__book-group');
var dataImg=[
    './assets/img/anh1.jpg',
    './assets/img/anh2.jpg',
    './assets/img/anh3.jpg'
]
var i=1;
setInterval(function(){ 
   console.log(i)
    var data=`${dataImg[i]}`;
    chuyenanh.setAttribute('style',`background-image:url(${data})`)
    if(i==2)
    i=0;
    else
    i++;
},10000)
