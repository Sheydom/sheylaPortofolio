document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".header");
  const hero = document.querySelector(".hero");

  if (!header || !hero) {
    console.warn("requiered elements not found");
    return;
  }

  const fixedHeader = () => {
    const headerHeight = header.offsetHeight;
    hero.style.paddingTop = `${headerHeight}px`;
  };

  fixedHeader();

  window.addEventListener("resize", fixedHeader);
  window.addEventListener("scroll", () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition > 0) {
      header.style.height = "2%";
    } else {
      header.style.height = "";
    }
  });
});

const projectCards = document.querySelectorAll(".flip-card");
const projectsBtns = document.querySelectorAll(".projects__button");
const moreInformation = document.querySelector(".moreInformation");
const moreInfoList = document.querySelector(".moreInfoList");

projectsBtns.forEach((btn, index) => {
  btn.addEventListener("click", (event) => {
    event.stopPropagation(); // Prevent the click from triggering other events
    moreInformation.classList.toggle("show");
    moreInfoList.classList.toggle("show");
    const projectCard = projectCards[index];
    projectCard.classList.toggle("expanded");

    const headerHeight = document.querySelector(".header").offsetHeight;
    const cardPosition =
      projectCard.getBoundingClientRect().top + window.scrollY;

    // Scroll to the card position minus the header height
    window.scrollTo({
      top: cardPosition - headerHeight,
      behavior: "smooth",
    });

    const expandedTiles = document.querySelectorAll(".flip-card.expanded");
    const expandedTilesCount = expandedTiles.length;
    if (
      !projectCard.classList.contains("expanded") &&
      expandedTilesCount === 0
    ) {
      const projectsSection = document.querySelector(".projects");
      const offset = 100; // Adjust this value as needed

      window.scrollTo({
        top:
          projectsSection.getBoundingClientRect().top + window.scrollY - offset,
        behavior: "smooth",
      });
    }
  });
});
