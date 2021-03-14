var icon=document.querySelector('.container__boat-group')
var video=document.querySelector('.container__group-video')
var iconclose=document.querySelector('.container__icon-close')
console.log(iconclose)
var overlay=document.querySelector('.overlay')
icon.onclick=function(){
   Object.assign(overlay.style,{
       opacity:1,
       zIndex:1,
       transition:'all .5s linear'
   })
   Object.assign(video.style,{
       zIndex:1,
       opacity:1
   })
}
var functionClose=function(){
    Object.assign(overlay.style,{
        opacity:0,
        zIndex:-1,
        transition:'all .7s linear'
    })
    Object.assign(video.style,{
        zIndex:-1,
        opacity:0
    })
}
overlay.onclick=function(){
    menu.classList.remove('fadeIn')  
    overlayMobileTalet.classList.remove('fadeIn')
    overlayMobileTalet.style.zIndex=-1;        
    functionClose();
   
}
iconclose.onclick=function(e){
    functionClose();
    e.stopPropagation();
    console.log(1)
}