alert("welcome to TECHVILLA EXPENCE TRACKER!");

const barSlide = () => {
  const burger = document.querySelector("#bar");
  const nav = document.querySelector("#option");
  const navBar = document.querySelectorAll("#option li");

  burger.addEventListener("click", () => {
    // to toggle
    nav.classList.toggle("option-active");

    // to animate
    navBar.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `newIcon 0.5s ease forwards ${index / 5 + 0.2}s`;
      }
      
    });
    
    // burger animation
    burger.classList.toggle("toggle");
  });
};

barSlide();

