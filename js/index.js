// Your code goes here
// Add 10 unique event listeners
const logoHeading = document.getElementsByClassName('logo-heading')[0];

logoHeading.addEventListener('mouseenter', () => {
  console.log('I am clicking');
});

const homeLink = document.getElementsByClassName('nav-link1')[0];
homeLink.addEventListener('mouseenter', () => {
  console.log('I am listening');
});

const aboutLink = document.getElementsByClassName('nav-link2')[0];
aboutLink.addEventListener('mouseenter', () => {
  console.log('I am listening');
});

const blogLink = document.getElementsByClassName('nav-link3')[0];
blogLink.addEventListener('mouseenter', () => {
  console.log('I am listening');
});

const contactLink = document.getElementsByClassName('nav-link4')[0];
contactLink.addEventListener('mouseenter', () => {
  console.log('I am listening');
});

const images = document.getElementsByTagName('img');

const busImg = images[0],
adventureImg = images[1],
      funImg = images[2],
    slideImg = images[3];

busImg.addEventListener('mouseenter', () => {
  console.log('I am clicking');
});

const headerText = document.getElementsByTagName('h2');
