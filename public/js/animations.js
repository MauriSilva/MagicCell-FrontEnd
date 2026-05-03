document.addEventListener("DOMContentLoaded", () => {

  gsap.from(".hero-title", {
    y: 20,
    opacity: 0,
    duration: 1,
    ease: "power2.out"
  });

  gsap.from(".hero-sub", {
    y: 20,
    opacity: 0,
    duration: 1,
    delay: 0.2,
    ease: "power2.out"
  });

  gsap.from(".hero-btn", {
    y: 20,
    opacity: 1,
    duration: 1,
    delay: 0.4,
    ease: "power2.out"
  });

});


  document.addEventListener("DOMContentLoaded", () => {

  const carousel = document.getElementById("carousel");
  const nextBtn = document.getElementById("nextBtn");
  const prevBtn = document.getElementById("prevBtn");

  if (!carousel) return;

  function getItemWidth() {
    const item = carousel.querySelector(".carousel-item");
    return item ? item.getBoundingClientRect().width + 24 : 0;
  }

  function nextSlide() {
    carousel.scrollBy({
      left: getItemWidth(),
      behavior: "smooth"
    });
  }

  function prevSlide() {
    carousel.scrollBy({
      left: -getItemWidth(),
      behavior: "smooth"
    });
  }

  nextBtn?.addEventListener("click", nextSlide);
  prevBtn?.addEventListener("click", prevSlide);

  let autoPlay = setInterval(nextSlide, 4000);

  carousel.addEventListener("mouseenter", () => {
    clearInterval(autoPlay);
  });

  carousel.addEventListener("mouseleave", () => {
    autoPlay = setInterval(nextSlide, 4000);
  });

});





