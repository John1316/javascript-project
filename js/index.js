var imgs = document.getElementsByClassName("card-img");
var imgsArray = [];
var lightboxItem = document.querySelector(".lightbox-item");
var lightbox =document.querySelector(".lightbox");
var next = document.getElementById("next");
var prev = document.getElementById("prev");
var wClose = document.getElementById("wClose");
var currentindex=0;

for (var i = 0 ; i< imgs.length ; i++ )
{         
    imgsArray.push(imgs[i]);
imgs[i] . addEventListener( "click" , function(e){
lightbox.classList.add("show")
var imgSrc = e.target.src;
lightboxItem.style.backgroundImage= "url("+imgSrc+")";

currentindex = (imgsArray.indexOf(e.target));

})
}
 
function nextMove (){
    currentindex++;
    if (currentindex == imgsArray.length)
    {
        currentindex=0
    }
    
        lightboxItem.style.backgroundImage= "url("+imgsArray[currentindex].src+")";
}

next.addEventListener("click" , function(){
  nextMove();
})

function prevMove(){
    currentindex--;
    if (currentindex < 0)
{
    currentindex = imgsArray.length - 1
}
    lightboxItem.style.backgroundImage= "url("+imgsArray[currentindex].src+")";
}

prev.addEventListener("click" , function(){
  prevMove();
})


wClose.addEventListener("click" , function(){
    lightbox.classList.remove("show")

})


document.addEventListener("keydown" , function(e){
    if (e.keyCode == 27){
        lightbox.classList.remove("show")
    }
    else if (e.keyCode == 39)
    {
nextMove();
    }
    else if (e.keyCode == 37)
    {
        prevMove();
    }
})