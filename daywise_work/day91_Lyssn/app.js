// Using inbuilt "fetch" function from Javascript to import Data as json asynchronously.
fetch("./data.json")
.then(res => {
   return res.json();
})
.then(data => {
  // Create an unordered list
let list = document.createElement('ul');

// Create a fragment
let fragment = document.createDocumentFragment();

// Create a list item for each data item.
// and append it to the fragment. 

data.map(function (item) {
// Function to capitalize any string input
  function capitalized (str) {
      return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    };
    const capitalizedFname = capitalized(item.fname);
    const capitalizedLname = capitalized(item.lname);

	let li = document.createElement('li');
	li.textContent = capitalizedLname + ", " + capitalizedFname;
	fragment.appendChild(li);
});

// Append the fragment to the list
list.appendChild(fragment);

// Append the list to the target container
let target = document.getElementById('container');
target.appendChild(list);

});

