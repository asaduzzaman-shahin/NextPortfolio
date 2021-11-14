


async function collectImg(){
  const random = Math.floor(Math.random()*50)
  const pics = fetch(`https://api.unsplash.com/search/photos/?client_id=lRCOMRq4p1Y1y8alsGpQQr_5ysLqJ7L4NRTlrSAba6U&query=nature&page=${random}`)
  const data =  pics.then((res)=> res.json())
  const result = await data.then((res)=>res);
  showImg(result.results)
  console.log(result);
}

const imgsec = document.querySelector(".imgsec");

function showImg(result){

  imgsec.innerHTML ="";
  let imgEl = document.createElement("div");
  imgEl.classList.add("imgsecs");
  
  result.forEach(e => {
      imgEl.innerHTML=`
       <img src="${e.urls.regular}"
      alt="${e.description}">
      `


      // const autoImg= url(e.urls.regular)
const footer = document.querySelector("footer")
footer.style.backgroundImage=`url(${e.urls.regular})`;

      
  });
  imgsec.appendChild(imgEl);



}

setInterval(collectImg,12000)







// Logo BG color change
const logoBg = document.querySelector("#logoBg");
const nameColor =document.querySelectorAll(".me h1");

logoBg.addEventListener("click",colorChange);

function colorChange(){
  let fff = logoBg.style.background=color();
  nameColor.forEach((nameColor)=>nameColor.style.color=fff);
}
function color(){
  
  return `hsl(${Math.floor(Math.random()*360)}, 100%, 50%)`
}


// Text Animation 
const text="Asaduzzaman Shahin";
const myName = document.querySelector("#t2");
const thisis = document.querySelector("#t1");

let index = 0;
function createText(){
 const aniText = text.slice(1, index);

 index++;
 myName.innerHTML="A"+aniText;

 if(index>text.length){
   index=0;

 }

}

setInterval(createText,300);



// form Validation

const form = document.querySelector("#form");
const nameInpute = document.querySelector(".name");
const phoneInpute = document.querySelector(".phone");
const emailInpute = document.querySelector(".email");
const messageInpute = document.querySelector(".message");
const smallTxt = document.querySelector(".small");

form.addEventListener("submit", (e)=>{
e.preventDefault();
formValidaton();
});

function formValidaton(){
  const nameValue =nameInpute.value.trim();
  const phoneValue = phoneInpute.value.trim();
  const emailValue = emailInpute.value.trim();
  const messageValue = messageInpute.value.trim();
 
// checking name validation
if(nameValue==""){
  setError(nameInpute, "Name inpute Can't be Empty")

}else{
  setSucces(nameInpute)
}


// checking phone validation

if(phoneValue==""){
  setError(phoneInpute, "Phone inpute Can't be Empty")

}else{
  setSucces(phoneInpute)
}

// Email name validation
if(emailValue==""){
  setError(emailInpute, "Email inpute Can't be Empty");
  

}else if(validEmail(emailInpute)){
  setError(emailInpute, "Email is not valide");
}else{
  setSucces(emailInpute)
}
// checking message validation

if(messageValue==""){
  setError(messageInpute, "Message inpute Can't be Empty");

}else{
  setSucces(messageInpute)
}


}

function setError(input, errorMessage){
  const formControl = input.parentElement;
  let small = formControl.querySelector(".small");
  small.innerText=errorMessage
}


function setSucces(input){
  input.style.border="1px solid #0baa22";
  const formControl = input.parentElement;
  let small = formControl.querySelector(".small");
  small.innerText=""
}

function validEmail(email){
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}













var xhr = new XMLHttpRequest();
xhr.open("GET", "https://api.countapi.xyz/hit/mysite.com/visits");
xhr.responseType = "json";
xhr.onload = function() {
    document.getElementById('countNumb').innerText = this.response.value;
}
xhr.send();


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
  if(scrollY<800){  
    nav.classList.remove("wh");
    nav.style.display="block"
   
  }
  if(scrollY>800 && scrollY<1700){
    nav.style.display="none"
  }
  if(scrollY>1700){
    nav.classList.add("wh");
    nav.style.display="block"
  
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
    enables:"autoplay",
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


