let heroRole = document.querySelector(".hero-section > span > h1");
let heroTitle = document.querySelector(".hero-section > h1:first-child");

const iterateHeroText = (title, role) => {
  setTimeout(() => {
    heroRole.style.animation = "none";
    heroRole.offsetHeight;

    heroTitle.innerHTML = title;
    heroRole.innerHTML = role;

    heroRole.style.animation = null;
  }, 3500);
};

const titles = ["I'm an", "I'm an", "I'm a"];
const roles = ["Entrepaneur", "Ex-Finance Lead", "Full Stack Developer"];

iterateHeroText(titles[0], roles[0]);

let counter = 1;
const intervalID = setInterval(() => {
  console.log(counter);
  console.log(roles.length);
  iterateHeroText(titles[counter], roles[counter]);
    
  counter++;

  if (counter === roles.length) {
      clearInterval(intervalID);
      console.log('Im done here');
    }
}, 3500);
