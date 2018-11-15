// swap 數字互換
var x = 7;
var y = 15;
console.log("x:" + x);
console.log("y:" + y);
// 設立第3者，3者之間互相給值
var z = x;
console.log(x,y,z);
x = y;
console.log(x,y,z);
y = z;
console.log(x,y,z);

console.log("x:" + x);
console.log("y:" + y);