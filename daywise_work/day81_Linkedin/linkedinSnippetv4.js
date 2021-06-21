// ==UserScript==
// @name         linkedinjobsearchfilter
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Sript to filter and remove jobs that either have easy apply option or are promoted jobs.
// @author       ameshalexk
// @match        https://www.linkedin.com/jobs/search/*
// @icon         https://www.google.com/s2/favicons?domain=linkedin.com
// @grant        none
// ==/UserScript==

(function () {
  'use strict';
  let url = window.location.search;
  let keywords = url.split('keywords=')[1];
  let newUrl;
  if (!window.location.search.includes('f_E')) {
    newUrl = `https://www.linkedin.com/jobs/search/?f_E=1%2C2%2C3&f_TPR=r604800&geoId=103644278&keywords=${keywords}`;
    window.location.href = newUrl;
    console.log(window.location.href);
    console.log(newUrl, 'sdsd');
  }

  let objDiv = document.querySelector('.jobs-search-results');

  function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }

  function start_scroll_down() {
    scroll = setInterval(function () {
      objDiv.scrollBy(0, getRandomArbitrary(501, 602));
      objDiv.scrollBy(0, getRandomArbitrary(51, 91));
      console.log('start');
      console.log(objDiv.scrollTop, 1);
      console.log(objDiv.clientHeight, 2);
      console.log(objDiv.scrollHeight, 3);
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

    let results = finalAll.map((i) => {
      let arr = i.parentElement.parentElement.parentElement.parentElement;
      arr.style.cssText = 'display: none';
      i.style.background = 'red';
      return arr;
    });

    let allPromo = document.querySelectorAll(
      '.job-card-container__apply-method'
    );

    let arrayAllPr = Array.from(allPromo);

    let results2 = arrayAllPr.map((i) => {
      let arr = i.parentElement.parentElement.parentElement.parentElement;
      arr.style.cssText = 'display: none';
      return arr;
    });
    console.log('done');
    objDiv.scrollTo(0, 0);
  }, getRandomArbitrary(8997, 9215));
})();
