let arrys = [1, 2, 3, 4, 5];

const temp = arrys[0];
arrys[0] = arrys[arrys.length - 1];
arrys[arrys.length - 1] = temp;

console.log(arrys); 