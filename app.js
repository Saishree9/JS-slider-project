let images=[
    "https://bootstrapmade.com/demo/templates/MeFamily/assets/img/gallery/vacation-2.jpg",
    "https://bootstrapmade.com/demo/templates/MeFamily/assets/img/gallery/home-2.jpg",
    "https://bootstrapmade.com/demo/templates/MeFamily/assets/img/gallery/beach-2.jpg",
    "https://bootstrapmade.com/demo/templates/MeFamily/assets/img/gallery/beach-1.jpg",
    "https://bootstrapmade.com/demo/templates/MeFamily/assets/img/gallery/beach-3.jpg"
]

let sliderImages=document.getElementById("slider")

let scrolling=document.getElementById("scrolling")
let i=0

function next(){
    scrolling.src=images[++i];
    if(i===(images.length)-1){
        i=-1
    }
    
}

function previous(){
    scrolling.src=images[--i]
    if(i===0){
        i=images.length
    }
}

let right=document.querySelector(".right")
let left=document.querySelector(".left")


right.addEventListener("click",next)
left.addEventListener("click",previous)

