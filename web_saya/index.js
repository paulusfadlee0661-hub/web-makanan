let slideIndex = 0;
showSlides(slideIndex);

// Fungsi untuk menampilkan slide berdasarkan index
function showSlides(n) {
  const slides = document.getElementsByClassName("slides");
  const dots = document.getElementsByClassName("dot");

  // Reset semua slide
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    slides[i].style.opacity = 0;
    slides[i].style.transform = "scale(1)";
    slides[i].style.transition = "opacity 1s ease, transform 3s ease";
  }

  // Reset semua dot
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  // Loop kembali ke awal jika index lebih besar
  if (n >= slides.length) { slideIndex = 0 }
  if (n < 0) { slideIndex = slides.length - 1 }

  // Tampilkan slide aktif
  slides[slideIndex].style.display = "block";
  setTimeout(() => {
    slides[slideIndex].style.opacity = 1;
    slides[slideIndex].style.transform = "scale(1.05)";
  }, 100);

  // Tandai dot aktif
  dots[slideIndex].className += " active";
}

// Fungsi untuk tombol Next/Prev
function plusSlides(n) {
  slideIndex += n;
  showSlides(slideIndex);
}

// Fungsi untuk klik dot
function currentSlide(n) {
  slideIndex = n;
  showSlides(slideIndex);
}

// Slider otomatis setiap 3 detik
setInterval(() => {
  slideIndex++;
  showSlides(slideIndex);
}, 3000);
