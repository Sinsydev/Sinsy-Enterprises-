             /*   HEADER-SECTION  */
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

 menuBtn.addEventListener("click", (e) =>{
   navLinks.classList.toggle("open");

   const isOpen = navLinks.classList.contains("open");
   menuBtnIcon.setAttribute("class", isOpen? "fa-solid fa-xmark" : "fa fa-bars")
 });

 navLinks.addEventListener("click", (e)=>{
   navLinks.classList.remove("open");
   menuBtnIcon.setAttribute("class","fa fa-bars");
 });

const navSearch = document.getElementById("nav-search");

navSearch.addEventListener("click", (e)=>{
   navSearch.classList.toggle("open");
})


const scrollRevealOption = {
   distance:"50px",
   origin:"bottom",
   duration:"1000",

};
scrollRevealOption().reveal("home-img img",{
   ...scrollRevealOption,
   origin:"right",
});
scrollRevealOption().reveal("home-text",{
   duration:900,
   delay:500,
});
scrollRevealOption().reveal("home-text h1",{
   ...scrollRevealOption,
   delay:900,
});
scrollRevealOption().reveal("home-text p",{
   ...scrollRevealOption,
   delay: 1500,
});

scrollRevealOption().reveal(".deals_card",{
   ...scrollRevealOption,
   interval: 500,
});
 

 const swiper = new swiper(".swiper",{
 loop:true,
 })







 