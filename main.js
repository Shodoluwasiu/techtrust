//swiper js (testimonial section) adding d scrollbar
const swiper = new Swiper(".swiper", {
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
  },
});

const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const menu = document.querySelector("nav .continer ul");

//show menu
menuBtn.addEventListener('click', () =>{
 menu.style.display = 'block';
  menuBtn.style.display = 'none';
  closeBtn.style.display = 'inline-block';
})

//hide menu
// closeBtn.addEventListener('click', () =>{
//   menu.style.display = 'none';
//   munuBtn.style.display = 'inline-block';
//   closeBtn.style.display = 'none';
// })

// const navItems = menu.querySelectorAll('li');

