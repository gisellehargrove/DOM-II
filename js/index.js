// Your code goes here
// Add 10 unique event listeners
const logoHeading = document.getElementsByClassName('logo-heading')[0];

// const tween = TweenLite.to(logoHeading, 2, {
  // x: 100,
  // ease: Bounce.easeInOut,
  // delay: 2,
  // onComplete: myFunction,
  // onCompleteParams: [element, 'param2']
// });

logoHeading.addEventListener('mouseenter', () => {
  logoHeading.style.fontSize = '10rem';
});

logoHeading.addEventListener('mouseleave', () => {
  logoHeading.style.fontSize = '4rem';
});

const colors = ['green', 'orange', 'pink', 'purple', 'red', 'blue', 'cyan', 'chartreuse', 'deepSkyBlue', 'FireBrick','thistle', 'peach']

const homeLink = document.getElementsByClassName('nav-link1')[0];
homeLink.addEventListener('click', () => {
  let randomNum = Math.floor(Math.random() * colors.length + 1);
  homeLink.style.color = colors[randomNum];
});


const aboutLink = document.getElementsByClassName('nav-link2')[0];
aboutLink.addEventListener('dblclick', () => {
  let randomNum = Math.floor(Math.random() * colors.length + 1);
  aboutLink.style.color = colors[randomNum];
});

const blogLink = document.getElementsByClassName('nav-link3')[0];
blogLink.addEventListener('drag', () => {
  let randomNum = Math.floor(Math.random() * colors.length + 1);
  blogLink.style.color = colors[randomNum];
  blogLink.classList.add('bordered');
});

const contactLink = document.getElementsByClassName('nav-link4')[0];
contactLink.addEventListener('mousedown', () => {
  let randomNum = Math.floor(Math.random() * colors.length + 1);
  contactLink.style.color = colors[randomNum];
  contactLink.style.opacity = 0;
});

contactLink.addEventListener('mouseup', () => {
  contactLink.style.opacity = 1;
})

const images = document.getElementsByTagName('img');

const busImg = images[0],
adventureImg = images[1],
      funImg = images[2],
    slideImg = images[3];

busImg.addEventListener('mouseenter', () => {
  console.log('I am clicking');
});

const headerText = document.getElementsByTagName('h2');
