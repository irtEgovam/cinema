let music = document.getElementById("bg-music");
let musicBtn = document.getElementById("music-btn");
let isPlaying = false;
musicBtn.addEventListener("click", () => {
  if (!isPlaying) {
    music.play();
    musicBtn.textContent = "🔇 Stop Music";
    isPlaying = true;
  } else {
    music.pause();
    musicBtn.textContent = "🔊 Play Music";
    isPlaying = false;
  }
});
let images = document.querySelectorAll(".cinema-img");
images.forEach((img) => {
    img.style.opacity = 0;
    img.style.transform = "translateY(20px)";
    img.style.transition = "opacity 1s ease, transform 1s ease";
});

window.addEventListener("load", () => {
    images.forEach((img, index) => {
        setTimeout(() => {
            img.style.opacity = 1;
            img.style.transform = "translateY(0)";
        }, index * 200); 
    });
});
