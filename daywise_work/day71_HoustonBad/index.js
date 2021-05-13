let bob = document.querySelectorAll('tr');

let tom = bob[25];

for (let i of tom) {
  if (i.children[0].classList[0] === 'apptLink') {
    console.log(i.children[0].classList[0]);
  }
}
