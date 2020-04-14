let backdrop = document.querySelector(".backdrop");
let mobileNav = document.querySelector(".mobile-nav");

const openMobileNav = () => {
  mobileNav.classList.add("open");
  backdrop.classList.add("open");
};

const closeBackdrop = () => {
  mobileNav.classList.remove("open");
  backdrop.classList.remove("open");
};
