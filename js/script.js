  // Mobile nav toggle
  const toggle = document.querySelector('.toggle'),
        nav = document.querySelector('nav ul');
  toggle.addEventListener('click', () => nav.classList.toggle('menu-active'));

  // Scroll reveal
  const items = document.querySelectorAll('.scroll-reveal');
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  items.forEach(i => obs.observe(i));

  // Image Slider
  let slideIndex = 1;
  showSlides(slideIndex);

  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  function showSlides(n) {
	  const slides = document.getElementsByClassName("mySlides");
	  const dots = document.getElementsByClassName("dot");
	  if (slides.length === 0) return;

	  if (n > slides.length) slideIndex = 1;
	  if (n < 1) slideIndex = slides.length;

	  for (let slide of slides) slide.style.display = "none";
	  for (let dot of dots) dot.className = dot.className.replace(" active", "");

	  const currentSlide = slides[slideIndex - 1];
	  if (currentSlide) currentSlide.style.display = "block";

	  if (dots[slideIndex - 1]) dots[slideIndex - 1].className += " active";
	}

  /*function showSlides(n) {
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("dot");
    if (n > slides.length) slideIndex = 1;
    if (n < 1) slideIndex = slides.length;
    for (let slide of slides) slide.style.display = "none";
    for (let dot of dots) dot.className = dot.className.replace(" active", "");
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
  }*/
  

  // Auto-advance slides every 5 seconds
  //setInterval(() => plusSlides(1), 5000);

// Wait for all images in the slideshow to load
function waitForCurrentImageLoad(slideIndex, callback) {
  const currentSlide = document.querySelectorAll(".mySlides")[slideIndex - 1];
  if (!currentSlide) return;

  const img = currentSlide.querySelector("img");
  if (!img) {
    callback(); // No image in slide, continue anyway
    return;
  }

  if (img.complete) {
    callback(); // Image already loaded
  } else {
    img.addEventListener("load", callback);
    img.addEventListener("error", callback);
  }
}

// Example usage
waitForCurrentImageLoad(slideIndex, () => {
  setInterval(() => plusSlides(1), 5000);
});