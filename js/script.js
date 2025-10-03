
const header = document.querySelector("header p");

const now = new Date();
const hour = now.getHours();
let greeting = "Hello!";

if (hour < 12) {
  greeting = "Good morning!";
} else if (hour < 18) {
  greeting = "Good afternoon!";
} else {
  greeting = "Good evening!";
}

header.textContent = `${greeting} I'm Rexie Quines, and this is a little about me.`;

const images = [
  "images/slide1.png",
  "images/slide2.png",
  "images/slide3.png",
  "images/slide4.png",
  "images/slide5.png",
  "images/slide6.png",
  "images/slide7.png",
  "images/slide8.png",
  "images/slide9.png"
];

let currentImage = 0;
const slideshow = document.getElementById("slideshow");

function showNextImage() {
  slideshow.src = images[currentImage];
  currentImage = (currentImage + 1) % images.length;
}

showNextImage(); 
setInterval(showNextImage, 2000); 


const contactLinks = document.querySelectorAll("#contact a");

contactLinks.forEach(link => {
  link.addEventListener("click", () => {
    console.log(`User clicked: ${link.href}`);
  });
});
