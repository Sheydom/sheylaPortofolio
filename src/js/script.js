const header = document.querySelector(".header");
const headerHeight = header.offsetHeight;
const hero = document.querySelector(".hero");

const fixedHeader = () => {
  hero.style.paddingTop = `${headerHeight}px`;
};

document.addEventListener("DOMContentLoaded", fixedHeader);
