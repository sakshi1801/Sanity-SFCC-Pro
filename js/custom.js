// Custom animations on slide change
Reveal.on('slidechanged', event => {
  const currentSlide = event.currentSlide;
  
  // Animate bullet points fade-in
  const bullets = currentSlide.querySelectorAll('.bullet-point');
  bullets.forEach((bullet, i) => {
    bullet.style.opacity = 0;
    setTimeout(() => {
      bullet.style.transition = "opacity 0.6s ease";
      bullet.style.opacity = 1;
    }, i * 300); // staggered animation
  });
});

