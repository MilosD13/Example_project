const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');

// Display Mobile Menu
const mobileMenu = () => {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);

// Show active menu when scrolling
const highlightMenu = () => {
  const elem = document.querySelector('.highlight');
  const aboutMenu = document.querySelector('#about-page');
  const faq = document.querySelector('#faq');
  let scrollPos = window.scrollY;

  // adds 'highlight' class to my menu items
  if (window.innerWidth > 960 && scrollPos > 500 && scrollPos < 1200) {
    aboutMenu.classList.add('highlight');
    faq.classList.remove('highlight');
    return;
  } else if (window.innerWidth > 960 && scrollPos > 2000) {
    aboutMenu.classList.remove('highlight');
    faq.classList.add('highlight');
    return;
   }
  if ((elem && window.innerWIdth < 960 && scrollPos < 600) || elem) {
    elem.classList.remove('highlight');
  }
};

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);

//  Close mobile Menu when clicking on a menu item
const hideMobileMenu = () => {
  const menuBars = document.querySelector('.is-active');
  if (window.innerWidth <= 768 && menuBars) {
    menu.classList.toggle('is-active');
    menuLinks.classList.remove('active');
  }
};

menuLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);

const header = document.querySelector("nav");
const sectionOne = document.querySelector(".hero");

const sectionOneOptions = {
  rootMargin: "-600px 0px 0px 0px"
};


/* Adding Nav background collor on scrolling */
const sectionOneObserver = new IntersectionObserver(function(
  entries,
  sectionOneObserver
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      header.classList.add("scrolling-active");
    } else {
      header.classList.remove("scrolling-active");
    }
  });
},
sectionOneOptions);

sectionOneObserver.observe(sectionOne);

// Footer date dynamicly changing 
var year = new Date().getFullYear();
var date = `&copy; ${year} Example Project`;

document.getElementById('c_rights').innerHTML = date;