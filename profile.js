// Logo slideshow
let logos = document.querySelectorAll('.hero-logo');
let index = 0;

function cycleLogos() {
  logos.forEach(logo => logo.classList.remove('active-logo'));
  logos[index].classList.add('active-logo');
  index = (index + 1) % logos.length;
}
setInterval(cycleLogos, 3000);

// Navigation content switching
function showContent(id, link) {
  const allLinks = document.querySelectorAll('.left-nav a');
  const allBlocks = document.querySelectorAll('.content-block');

  allLinks.forEach(l => l.classList.remove('active'));
  link.classList.add('active');

  allBlocks.forEach(block => block.classList.remove('active-block'));
  document.getElementById(id).classList.add('active-block');
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('a[href="#home"]').classList.add('active');
  document.getElementById('home').classList.add('active-block');
});

// Background music play
function playMusic() {
  const audio = document.getElementById("bg-music");
  audio.play();
  document.getElementById("play-btn").style.display = "none";
}
