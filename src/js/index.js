function animateCounter(element, targetValue, duration) {
  const startValue = 0; 
  const increment = targetValue / (duration / 16);
  let currentValue = startValue;

  function updateCounter() {
    currentValue += increment;
    if (currentValue >= targetValue) {
      element.textContent = Math.floor(targetValue) + (element.dataset.suffix || '');
    } else {
      element.textContent = Math.floor(currentValue) + (element.dataset.suffix || '');
      requestAnimationFrame(updateCounter); 
    }
  }

  updateCounter();
}

document.addEventListener('DOMContentLoaded', () => {
  const counters = document.querySelectorAll('.product-card .text-3xl');
  counters.forEach(counter => {
    const targetValue = parseInt(counter.textContent.replace(/\D/g, ''));
    const suffix = counter.textContent.replace(/\d+/g, '');
    counter.dataset.suffix = suffix;
    counter.textContent = '0';
    animateCounter(counter, targetValue, 2000); 
  });
});

document.addEventListener('DOMContentLoaded', () => {
  AOS.init({
    duration: 1000,
    once: true,
  });
});
