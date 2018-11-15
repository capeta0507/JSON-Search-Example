// 陣列相加
var Arr = [1,7,12,5,3,4];
var sum = 0;
// 用push新增值到陣列
Arr.push(8);
console.log(Arr)
// 方法1 使用for loop
// for(var x = 0;x<Arr.length;x++){
//     console.log(Arr[x]);
//     sum += Arr[x];
// }
// 方法2 使用map
Arr.map(
    (num) => {sum += num;}
)

console.log("sum:" + sum);