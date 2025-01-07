function getTimeDifference(startDate) {
  const start = new Date(startDate);
  const now = new Date();
  
  let years = now.getFullYear() - start.getFullYear();
  let months = now.getMonth() - start.getMonth();
  let days = now.getDate() - start.getDate();

  if (days < 0) {
    months--;
    const lastMonth = new Date(now.getFullYear(), now.getMonth(), 0);
    days += lastMonth.getDate();
  }
  
  if (months < 0) {
    years--;
    months += 12;
  }

  return { years, months, days };
}

function declension(number, words) {
  const cases = [2, 0, 1, 1, 1, 2];
  return words[
    (number % 100 > 4 && number % 100 < 20) ? 2 : 
    cases[(number % 10 < 5) ? number % 10 : 5]
  ];
}

function animateTimeCounter(element, startDate, duration) {
  const timeDiff = getTimeDifference(startDate);
  const yearWords = ['рік', 'роки', 'років'];
  const monthWords = ['місяць', 'місяці', 'місяців'];
  const dayWords = ['день', 'дні', 'днів'];
  
  let currentYear = 0;
  let currentMonth = 0;
  let currentDay = 0;
  
  const yearIncrement = timeDiff.years / (duration / 16);
  const monthIncrement = timeDiff.months / (duration / 16);
  const dayIncrement = timeDiff.days / (duration / 16);

  function updateCounter() {
    if (currentYear < timeDiff.years) {
      currentYear = Math.min(currentYear + yearIncrement, timeDiff.years);
    }
    if (currentYear >= timeDiff.years && currentMonth < timeDiff.months) {
      currentMonth = Math.min(currentMonth + monthIncrement, timeDiff.months);
    }
    if (currentYear >= timeDiff.years && currentMonth >= timeDiff.months && currentDay < timeDiff.days) {
      currentDay = Math.min(currentDay + dayIncrement, timeDiff.days);
    }

    const yearText = Math.floor(currentYear) > 0 ? 
      `${Math.floor(currentYear)} ${declension(Math.floor(currentYear), yearWords)},` : '';
    const monthText = Math.floor(currentMonth) > 0 ? 
      ` ${Math.floor(currentMonth)} ${declension(Math.floor(currentMonth), monthWords)},` : '';
    const dayText = Math.floor(currentDay) > 0 ? 
      ` ${Math.floor(currentDay)} ${declension(Math.floor(currentDay), dayWords)}` : '';

    element.textContent = yearText + monthText + dayText;

    if (currentYear < timeDiff.years || 
        currentMonth < timeDiff.months || 
        currentDay < timeDiff.days) {
      requestAnimationFrame(updateCounter);
    }
  }
  
  updateCounter();
}

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
    const isTimeCounter = counter.textContent.includes('2+');
    if (isTimeCounter) {
      counter.textContent = '';
      animateTimeCounter(counter, '2022-11-29', 1000);
    } else {
      const targetValue = parseInt(counter.textContent.replace(/\D/g, ''));
      const suffix = counter.textContent.replace(/\d+/g, '');
      counter.dataset.suffix = suffix;
      counter.textContent = '0';
      animateCounter(counter, targetValue, 1000);
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  AOS.init({
    duration: 1000,
    once: true,
  });
});
