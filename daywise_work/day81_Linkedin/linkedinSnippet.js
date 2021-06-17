// setTimeout(function () {
//   // let objDiv = document.querySelector('.jobs-search-results');
//   // objDiv.scrollTop = objDiv.scrollHeight - 10;

//   let objDiv = document.querySelector('.jobs-search-results');

//   function start_scroll_down() {
//     scroll = setInterval(function () {
//       objDiv.scrollBy(0, 1000);
//       console.log('start');
//     }, 1500);
//     return scroll;
//   }

//   function stop_scroll_down() {
//     clearInterval(scroll);
//     console.log('stop');
//   }
// }, 10);

let objDiv = document.querySelector('.jobs-search-results');

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

function start_scroll_down() {
  scroll = setInterval(function () {
    objDiv.scrollBy(0, getRandomArbitrary(501, 602));
    objDiv.scrollBy(0, getRandomArbitrary(51, 91));
    console.log('start');
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
    return arr;
  });

  let allPromo = document.querySelectorAll('.job-card-container__apply-method');

  let arrayAllPr = Array.from(allPromo);

  let results2 = arrayAllPr.map((i) => {
    let arr = i.parentElement.parentElement.parentElement.parentElement;
    arr.style.cssText = 'display: none';
    return arr;
  });
  console.log('done');
}, getRandomArbitrary(8997, 9215));

let selectedJobs = document.querySelectorAll('.jobs-search-results__list-item');
let selectedJobsArr = Array.from(selectedJobs);

let filteredJobs = selectedJobsArr.filter((e) => {
  if (e.style.display !== 'none') {
    return e;
  }
});
