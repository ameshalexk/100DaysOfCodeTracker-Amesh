(function () {
  'use strict';

  let objDiv = document.querySelector('.jobs-search-results');

  function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }

  function start_scroll_down() {
    scroll = setInterval(function () {
      objDiv.scrollBy(0, getRandomArbitrary(501, 602));
      objDiv.scrollBy(0, getRandomArbitrary(51, 91));
    }, getRandomArbitrary(1351, 1502));
    // return scroll;
  }

  function stop_scroll_down() {
    clearInterval(scroll);
    console.log('stop');
  }

  start_scroll_down();

  setTimeout(function () {
    stop_scroll_down();
  }, getRandomArbitrary(7355, 7521));

  setTimeout(function () {
    let all = document.querySelectorAll('li');

    let arrayAll = Array.from(all);

    let finalAll = arrayAll.filter((i) => {
      if (i.innerText === 'Promoted') {
        return i;
      }
    });

    finalAll.map((i) => {
      let arr = i.parentElement.parentElement.parentElement.parentElement;
      arr.style.cssText = 'display: none';
      return arr;
    });

    let easyApply = document.querySelectorAll(
      '.job-card-container__apply-method'
    );

    let arrayAllPr = Array.from(easyApply);

    arrayAllPr.map((i) => {
      let arr = i.parentElement.parentElement.parentElement.parentElement;
      arr.style.cssText = 'display: none';
      return arr;
    });
    objDiv.scrollTo(0, 0);
  }, getRandomArbitrary(8997, 9215));
})();
