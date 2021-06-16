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
