// Header
const header = document.getElementById("header");
if (header) {
  header.outerHTML = `
  <header>
    <nav id=navbar class="container" >
<span class=" md:inline" style="font-size: 32px;"><a aria-label="Pagoole Home" class="inline-flex items-center tracking-tight select-none align-baseline" style="background:transparent;text-shadow:none;line-height:1;font-size:inherit" href="https://pagoole.com/"><span style="color:rgb(234, 67, 53)">P</span><span style="color:rgb(66, 133, 244)">a</span><span style="color:#00C853">g</span><span style="color:rgb(251, 188, 5)">o</span><span style="color:#00C853">o</span><span style="color:rgb(66, 133, 244)">l</span><span style="color:rgb(234, 67, 53)">e</span></a></span>
      <div class="toggle">☰</div>
      <ul id="pagoole-menu">
        <li><a href="https://pagoole.com/"><i class="fas fa-home" style="color: blue;"></i> Home</a></li>
        <li><a href="https://discountshop.pagoole.com/"><i class="fas fa-user" style="color: #e67e22;"></i> Discount Shop</a></li>
        <li><a href="https://pagoole.com/dunamic-solutions"><i class="fas fa-briefcase" style="color: #2ecc71;"></i> Dynamic Solution</a></li>
        <li><a href="https://account.pagoole.com/"><i class="fas fa-cog" style="color: #9b59b6;"></i> My Profile</a></li>
        <li><a href="https://account.pagoole.com/login"><i class="fas fa-sign-in-alt" style="color: #e74c3c;"></i> Login</a></li>
      </ul>
    </nav>
  </header>
`;
}


// Banner
const banner = document.getElementById("banner");
if (banner) {
  banner.innerHTML = `
<div id="top"></div>
  <section class="hero-slider">
  <div class="slideshow-container">
    <!-- Slide 1 -->
    <div class="mySlides fade">
      <a href="https://pagoole.com" target="_self">
        <img src="public/pagoole-dot-com-bangla.png" style="width:100%; cursor:pointer;" loading="lazy" alt="পাগল বিডি Pagol BD">
      </a>
      <div class="text">Welcome To My Site!</div>
    </div>
    <!-- Slide 2 -->
    <div class="mySlides fade">
      <a href="https://discountshop.pagoole.com" target="_self">
        <img src="https://pagoole.com/pagoole_discountshop_online.png" style="width:100%; cursor:pointer;" loading="lazy" alt="পাগল বিডি Pagol BD">
      </a>
      <div class="text">পাগল ডিসকাউন্ট শপ</div>
    </div>
    <!-- Slide 3 -->
    <div class="mySlides fade">
      <a href="https://pagoole.com/dunamic-solutions" target="_self">
        <img src="https://pagoole.com/dynamic_solutions.png" style="width:100%; cursor:pointer;" loading="lazy" alt="পাগল বিডি Pagol BD">
      </a>
      <div class="text">Dynamic Solution</div>
    </div>
    <!-- Slide 4 -->
    <div class="mySlides fade">
      <a href="https://account.pagoole.com/" target="_blank">
        <img src="public/pagoole-accoutn_banner.png" width="1200" height="800" style="cursor:pointer;" loading="lazy" alt="পাগল বিডি Pagol BD">
      </a>
      <div class="text">My Profile</div>
    </div>
    <!-- Arrows -->
    <a class="prev" href="#" onclick="event.preventDefault(); plusSlides(-1)">&#10094;</a>
    <a class="next" href="#" onclick="event.preventDefault(); plusSlides(1)">&#10095;</a>
</div>


  <!-- Dots -->
  <div class="dots-container" style="text-align:center">
    <span class="dot" onclick="currentSlide(1)"></span>
    <span class="dot" onclick="currentSlide(2)"></span>
    <span class="dot" onclick="currentSlide(3)"></span>
    <span class="dot" onclick="currentSlide(4)"></span>
  </div>
</section>
`;
}

/*
// Footer
const footer = document.getElementById("footer");
if (footer) {
  footer.innerHTML = `
  <footer class="footer">
  <div class="footer-container">
    <p>&copy; 2025 <a href="https://www.pagoole.com.bd">পাগল বিডি</a> || <a href="https://www.pagoole.com.bd">Pagoole BD</a> All rights reserved.</p>
    <div class="footer-social">
      <a href="#top" title="Back to Top">
        <i class="fas fa-arrow-up"></i>
      </a>
    </div>
    <div class="footer-social">
      <a href="https://www.facebook.com/ituhin2" title="Facebook" target="_blank">
        <i class="fab fa-facebook-f"></i>
      </a>
      <a href="https://twitter.com/@shafiq_dacca" title="Twitter" target="_blank">
        <i class="fab fa-twitter"></i>
      </a>
      <a href="https://www.linkedin.com/in/shafiqbd" title="LinkedIn" target="_blank">
        <i class="fab fa-linkedin-in"></i>
      </a>
      <a href="https://github.com/shafiqdacca" title="GitHub" target="_blank">
        <i class="fab fa-github"></i>
      </a>
    </div>    
  </div>
</footer>
`;
}
*/

//const navMenu = document.querySelector("nav ul");
const navMenu = document.getElementById('pagoole-menu');

// Mobile Nav Toggle (optional)
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".toggle");
  //const navMenu = document.querySelector("nav ul");
  //const navMenu = document.getElementById('pagoole-menu');

  if (toggle && navMenu) {
    toggle.addEventListener("click", () => {
      //console.log(navMenu.className);
      navMenu.classList.toggle(".menu-active");
    });
  }
});

// Close menu if clicking outside
document.addEventListener("click", (e) => {
  //console.log(e.target);
  if (!navMenu.contains(e.target) && !toggle.contains(e.target)) {
    navMenu.classList.remove("menu-active");
  }
});

let slideIndex = 1;
showSlides(slideIndex);

// Next / previous controls
function plusSlides(n) {
  slideIndex += n;
  showSlides(slideIndex);
}

// Thumbnail image controls
function currentSlide(n) {
  slideIndex = n;
  showSlides(slideIndex);
}

function showSlides(n) {
  const slides = document.getElementsByClassName("mySlides");
  const dots = document.getElementsByClassName("dot");
  if (slides.length === 0) return;

  if (n > slides.length) slideIndex = 1;
  if (n < 1) slideIndex = slides.length;

  // Hide all slides
  for (let slide of slides) slide.style.display = "none";
  for (let dot of dots) dot.className = dot.className.replace(" active", "");

  const currentSlide = slides[slideIndex - 1];
  currentSlide.style.display = "block";
  if (dots[slideIndex - 1]) dots[slideIndex - 1].className += " active";

  // Wait for current image to load, then move to next after 5s
  waitForCurrentImageLoad(slideIndex, () => {
    setTimeout(() => plusSlides(1), 10000);
  });
}

// ✅ Wait until current image is loaded before moving to next
function waitForCurrentImageLoad(index, callback) {
  const currentSlide = document.querySelectorAll(".mySlides")[index - 1];
  if (!currentSlide) return;

  const img = currentSlide.querySelector("img");
  if (!img) {
    callback(); // no image — continue anyway
    return;
  }

  if (img.complete) {
    callback(); // already loaded
  } else {
    img.addEventListener("load", callback, { once: true });
    img.addEventListener("error", callback, { once: true });
  }
}
