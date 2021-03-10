
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
var dataImg={
    0: './assets/img/anh1.jpg',
    1:'./assets/img/anh2.jpg',
    2: './assets/img/anh3.jpg'
}
var i=1;
var seps=document.getElementsByClassName('container__book-sep');
seps[0].onclick=function(){
    seps[0].classList.add('add__white')
    seps[1].classList.remove('add__white')
    seps[2].classList.remove('add__white')
    chuyenanh.setAttribute('style',`background-image:url(${dataImg[0]})`)
    i=0;
}
seps[1].onclick=function(){
    seps[1].classList.add('add__white')
    seps[0].classList.remove('add__white')
    seps[2].classList.remove('add__white')
    chuyenanh.setAttribute('style',`background-image:url(${dataImg[1]})`)
    i=1;
}
seps[2].onclick=function(){
    seps[2].classList.add('add__white')
    seps[1].classList.remove('add__white')
    seps[0].classList.remove('add__white')
    chuyenanh.setAttribute('style',`background-image:url(${dataImg[2]})`)
    i=0;
}
seps[0].classList.add('add__white')
var item=setInterval(function(){ 
    for(var j=0;j<seps.length;j++)
    if(i==j)
    seps[i].classList.add('add__white');
    else
    seps[j].classList.remove('add__white');
    chuyenanh.setAttribute('style',`background-image:url(${dataImg[i]})`)   
    if(i >=2)
    i=0;
    else
    i++;
},5000)