



const allbutton = document.querySelectorAll(".btnSound");
const clickSoundv2 = "../gallery/click.wav";

allbutton.forEach((e)=>{
e.addEventListener("click",()=>{
  new Audio(clickSoundv2).play()

})
})


const allInput = document.querySelectorAll(".clickSound");
const clickSound = "../gallery/mouseClick.mp3"
allInput.forEach((e)=>{
e.addEventListener("keypress",()=>{
  new Audio(clickSound).play()

})
})

// position menu with 
const nav = document.querySelector(".nevMenu")
window.addEventListener("scroll",()=>{
  if(scrollY>900){  
    nav.classList.add("wh");
  }else{
    nav.classList.remove("wh");
  }

})

const url = "../gallery/mixkit-car-window-breaking-1551.wav";
const urlNS = "../gallery/notification.mp3";



const socialLink = document.querySelectorAll(".socialLink a");

socialLink.forEach((e)=>{

  e.addEventListener("mouseover", ()=>{
    new Audio(url).play();
  })

})

const btnSound ="../gallery/deepAir.wav"

const btnStyle = document.querySelectorAll(".btnStyle");


btnStyle.forEach((e)=>{

  e.addEventListener("mouseover", ()=>{
    new Audio(btnSound).play();
  })

})

const fire ="../gallery/deepAir.wav"

const playBtnStyle = document.querySelectorAll(".playBtnStyle");


playBtnStyle.forEach((e)=>{

  e.addEventListener("mouseover", ()=>{
    new Audio(fire).play();
  })

})


playBtnStyle

// Play Video

var playBtn = document.querySelector(".playBtnStyle a");
var videoSec = document.querySelector("#videoSec");
var closeBtn = document.querySelector(".videoBtn");

playBtn.addEventListener("click", function(){
    videoSec.style.display="flex";

});

closeBtn.addEventListener("click", function(){
  videoSec.style.display="none";
  alert("Pause the Video before close. Wants to Close The Video? Please Press OK");

});


var btn = document.querySelector(".navBtn");
var main = document.querySelector("nav");


btn.addEventListener("click", function(){
  
  main.classList.toggle("active");
})

$(document).ready(function(){
  $('.myBlogs').slick({
    type: Boolean,
    default:false,
    enables:autoplay,
  });
});

$('.myBlogs').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  centerMode:false,
  centerPAdding:"100px"
});