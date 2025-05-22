function animateCounter(id, endValue, duration) {
    const el = document.getElementById(id);
    let start = 0;
    const increment = endValue / (duration / 10);

    const counter = setInterval(() => {
      start += increment;
      if (start >= endValue) {
        start = endValue;
        clearInterval(counter);
      }
      el.textContent = Math.floor(start);
    }, 10);
  }

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter("counter", 300, 2000); // até 200, em 2 segundos
       /* observer.unobserve(entry.target); // só executa uma vez*/
      }
    });
  });

  window.addEventListener('DOMContentLoaded', () => {
    const target = document.getElementById("counter");
    observer.observe(target);
  });