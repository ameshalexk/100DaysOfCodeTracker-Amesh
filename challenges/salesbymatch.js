const arr = [10,20,20,10,10,30,50,10,20];
let count = []; 

for (let i = 0; i <= arr.length; i++) {
    if (arr.includes(arr[i])) {
        count.push(arr[i])
    }
}
console.log(count);


