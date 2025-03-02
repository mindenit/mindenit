function getTimeDifference(startDate) {
  const start = new Date(startDate);
  const kyivOffset = 2 * 60;
  const now = new Date();
  const userOffset = now.getTimezoneOffset();
  const offsetDiff = kyivOffset + userOffset;
  
  const kyivNow = new Date(now.getTime() + offsetDiff * 60 * 1000);
 
  let years = kyivNow.getFullYear() - start.getFullYear();
  let months = kyivNow.getMonth() - start.getMonth();
  let days = kyivNow.getDate() - start.getDate();

  if (days < 0) {
    months--;
    const lastMonth = new Date(kyivNow.getFullYear(), kyivNow.getMonth(), 0);
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

function formatTimeText(value, words, addComma = true) {
  if (value <= 0) return '';
  const text = `${Math.floor(value)} ${declension(Math.floor(value), words)}`;
  return addComma ? text + ',' : text;
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

    const parts = [];
    
    const yearText = formatTimeText(currentYear, yearWords, !!(Math.floor(currentMonth) || Math.floor(currentDay)));
    const monthText = formatTimeText(currentMonth, monthWords, !!Math.floor(currentDay));
    const dayText = formatTimeText(currentDay, dayWords, false);
    
    if (yearText) parts.push(yearText);
    if (monthText) parts.push(monthText);
    if (dayText) parts.push(dayText);
    
    element.textContent = parts.join(' ');

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
  const counters = document.querySelectorAll('.product-card .counter');
  counters.forEach(counter => {
    const isTimeCounter = counter.textContent.includes('2+');
    if (isTimeCounter) {
      counter.textContent = '';
      animateTimeCounter(counter, '2023-02-16', 1000);
    } else {
      const targetValue = parseInt(counter.textContent.replace(/\D/g, ''));
      const suffix = counter.textContent.replace(/\d+/g, '');
      counter.dataset.suffix = suffix;
      counter.textContent = '0';
      animateCounter(counter, targetValue, 1000);
    }
  });

  AOS.init({
    duration: 1000,
    once: true,
  });
});