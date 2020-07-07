const counters = document.querySelectorAll('.counter');
const speed = 2;

counters.forEach(counter => {
  updatedCount = () => {
    const target = +counter.getAttribute('data-target');
    const count = +counter.innerText;
    const inc = target / speed;

    if (count < target) {
      counter.innerText = Math.ceil(count + inc);
      setTimeout(updatedCount, 1);
    } else {
      count.innerText = target;
    }
  };

  updatedCount();
});
