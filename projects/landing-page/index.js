// GET THE RANDOM IMAGE FROM LOCAL STORAGE


let localStorageMainColor=localStorage.getItem('main-color');
if (localStorageMainColor!== null){
  document.documentElement.style.setProperty("--main--color",localStorageMainColor)
  document.querySelectorAll('.colors-list li').forEach((ele)=>{
    ele.classList.remove('active');
    if(ele.dataset.color===localStorageMainColor){
      ele.classList.add("active")}})}
// setting area
document.querySelector(".toggle").onclick = function () {
  document.querySelector(".settings-icon").classList.toggle("fa-spin");
  document.querySelector(".settings-box").classList.toggle("open");
};
// color list
const colorsLi=document.querySelectorAll('.colors-list li');
colorsLi.forEach(li=>{
  li.addEventListener("click",(e)=>{
    document.documentElement.style.setProperty("--main--color",e.target.dataset.color);
    localStorage.setItem("main-color",e.target.dataset.color);
    
    // remove active from all
    e.target.parentElement.querySelectorAll('.active').forEach(element=>{
      element.classList.remove("active")
    })
    // add active to the current
e.target.classList.add('active');
  })
})

// random back ground option
// remove active from all yes and no span and add it to clicked span
const rndBckOpt=document.querySelectorAll('.settings-box .bcknd-cont .bcknd-opt span')
 rndBckOpt.forEach(span=>{
  span.addEventListener("click",(e)=>{
    // remove all active class
    localStorage.setItem("rndBagrIma",e.target.textContent);
    e.target.parentElement.querySelectorAll('.active').forEach(element=>{
      element.classList.remove("active")});
      
      e.target.classList.add('active');
      randomizeintervalBGI();
    })
  })
  
  //
  // random back ground image
  let firstSection = document.querySelector(".first_section");
  
  let imgArray = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg"];
  
  function randomizeintervalBGI(){
    let randomizeBGI = localStorage.getItem("rndBagrIma");
    console.log(randomizeBGI)
    if(randomizeBGI==='yes'){
      let  =setInterval(() => {
        let randomNumber = Math.floor(Math.random() * imgArray.length);
        firstSection.style.backgroundImage =
        "url(images/" + imgArray[randomNumber] + ")";
      }, 3000);
    }else{
      clearInterval(rndbackground)
    }};

//  skills animation
const skills=document.querySelector('.skills');
window.onscroll=function(){
  let skillOffsetTop=skills.offsetTop;
  let skillsOuterHeight=skills.offsetHeight;
  let windowHeight=this.innerHeight;
  let windowScrollTop=scrollY;
  
if(windowScrollTop >(skillOffsetTop+skillsOuterHeight-windowHeight)){
let allSkills=document.querySelectorAll(".skills .skill-box .skill-progress span");
allSkills.forEach((skill)=>{
  skill.style.width=skill.dataset.progress;
})
}
}
// our gallery popuo
let ourGaleryImg=document.querySelectorAll('.fourth_section .box-images img');
ourGaleryImg.forEach((item)=>{
  item.addEventListener("click",(e)=>{
    // create pop up container as a full screen
    let popupOverlay=document.createElement("div");
    popupOverlay.className='popupoverlay';
    document.body.appendChild(popupOverlay);
    // make image pop up item
    let imgPopup=document.createElement("div");
    imgPopup.className='imgPopup';
    let currentImage=document.createElement("img");
    let imgAlt=document.createElement("h2");
    imgAlt.textContent=item.alt;
    let closeButton=document.createElement("div");
    closeButton.className="x-button"
    closeButton.textContent="x";
    currentImage.src=item.src;
    imgPopup.appendChild(closeButton);
    imgPopup.appendChild(imgAlt);
    imgPopup.appendChild(currentImage);
    popupOverlay.appendChild(imgPopup);
    closeButton.addEventListener("click",(e)=>{document.body.removeChild(popupOverlay)})
  })
  
})

   




