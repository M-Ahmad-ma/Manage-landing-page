let navToggle = document.querySelector(".mobile-nav-toggle");
let primaryNav = document.querySelector(".primary-navigation");
 
navToggle.addEventListener('click', function(){
  primaryNav.classList.toggle("opened")
})

 
let carousel = document.querySelector(".carousel");
let isDrageStart = false, startX,  StartScrollLeft;

const dragStart = (e) => {
   isDrageStart = true;
   carousel.classList.add("dragging");
   startX = e.pageX;
   StartScrollLeft = carousel.scrollLeft;
}

const draging = (e) => {
  if(!isDrageStart) return;
  carousel.scrollLeft = StartScrollLeft - (e.pageX - startX);  
  
}
const dragStop = (e) => { 
  isDrageStart = false;
  carousel.classList.remove("dragging");
}

carousel.addEventListener('mousemove', draging);
carousel.addEventListener('mousedown', dragStart);
carousel.addEventListener('mouseup', dragStop);