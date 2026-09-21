let arr = [1, 2, 4, 5];
let temp = [];
for (let i = 0; i< arr.length; i++) {
if (i===2) {
temp.push(3);
}
temp.push(arr[i]);
}
console.log(temp)