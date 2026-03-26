function validateForm() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const errorMessage = document.getElementById('errorMessage');

  if (username === "ambatron" && password === "admin123") {
    window.location.href = './index.html';
      return false;
  } else {
      errorMessage.textContent = Swal.fire({
        title: "Jangan sok tau kamu",
        text: "Tanya ke admin ambatron buat dapet info login.",
        imageUrl: './image/ambatron',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: "salah besar"
      });
      return false;
  }
} 

// Pixel falling effect
const pixelContainer = document.querySelector('.pixel-background');

function createPixel() {
  const pixel = document.createElement('div');
  pixel.classList.add('pixel');
  pixel.style.left = `${Math.random() * 100}vw`;
  pixel.style.animationDuration = `${Math.random() * 3 + 2}s`;
  pixelContainer.appendChild(pixel);

  setTimeout(() => {
      pixel.remove();
  }, 5000); // Adjust the timing if needed
}

// Generate falling pixels
setInterval(createPixel, 150); // Adjust the interval for more or fewer pixels