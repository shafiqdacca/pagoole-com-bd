// Header
document.getElementById("header").innerHTML = `
  <header>
    <nav class="container">
   <a href="/">
<img src="https://pagoole.com/assets/img/navbar-logo-64x64.png" 
     alt="পাগল বিডি Pagol BD"
     width="50"
     height="50"
     style="vertical-align: middle;
            border-radius: 50%;
            background-color: #0000ff5c;">
  <!--<span style="
    font-weight: bold;
    font-size: 1.8rem;
    background: linear-gradient(
      90deg,
      rgb(4, 145, 11),
      #00ffaa,
      rgb(255, 0, 0),
      #8855ff,
      #ff5599
    );
    vertical-align: middle;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    display: inline-block;
  ">
    পাগল বিডি Pagoole BD
  </span>-->
  <span class="logo-text">
      পাগল বিডি Pagoole BD
  </span>
</a>



      <div class="toggle">☰</div>
      <ul id="pagoole-menu">
        <li><a href="index.html"><i class="fas fa-home" style="color: blue;"></i> Home</a></li>
        <li><a href="about.html"><i class="fas fa-user" style="color: #e67e22;"></i> About</a></li>
        <li><a href="portfolio.html"><i class="fas fa-briefcase" style="color: #2ecc71;"></i> Portfolio</a></li>
        <li><a href="services.html"><i class="fas fa-cog" style="color: #9b59b6;"></i> Services</a></li>
        <li><a href="contact.html"><i class="fas fa-envelope" style="color: #e74c3c;"></i> Contact</a></li>
      </ul>
    </nav>
  </header>
`;

// Banner
document.getElementById("banner").innerHTML = `
<section id="top"></section>
  <section class="hero-slider">
  <div class="slideshow-container">
    <!-- Slide 1 -->
    <div class="mySlides fade">
      <img src="https://apex.oracle.com/pls/apex/shafiqadmin/all/getblob/pagoole-banner-1" style="width:100%" loading="lazy" alt="পাগল বিডি Pagol BD">
      <div class="text">Welcome To My Site!</div>
    </div>
    <!-- Slide 2 -->
    <div class="mySlides fade">
      <img src="https://apex.oracle.com/pls/apex/shafiqadmin/all/getblob/pagoole-banner-2" style="width:100%" loading="lazy" alt="পাগল বিডি Pagol BD">
      <div class="text">My Campus</div>
    </div>
    <!-- Slide 3 -->
    <div class="mySlides fade">
      <img src="https://apex.oracle.com/pls/apex/shafiqadmin/all/getblob/pagoole-banner-3" style="width:100%" loading="lazy" alt="পাগল বিডি Pagol BD">
      <div class="text">My Workstation</div>
    </div>
    <!-- Slide 4 -->
    <div class="mySlides fade">
      <img src="https://apex.oracle.com/pls/apex/shafiqadmin/all/getblob/pagoole-banner-4" width="1200" height="800" loading="lazy" alt="পাগল বিডি Pagol BD">
      <div class="text">My Team</div>
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

// Footer
document.getElementById("footer").innerHTML = `
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


// Mobile Nav Toggle (optional)
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".toggle");
  //const navMenu = document.querySelector("nav ul");
  const navMenu = document.getElementById('pagoole-menu');

  if (toggle && navMenu) {
    toggle.addEventListener("click", () => {
      //console.log(navMenu.className);
      navMenu.classList.toggle(".menu-active");
    });
  }
});
