var Arr1=[1,5,18,17,2,3,10,4];
var Arr2=['Banana','Apple','Orange','Egg'];
for(var x = 0;x<Arr1.length;x++){
    console.log(Arr1[x]);
}
// 使用map的function
Arr1.map(function(array){
    console.log(array);
})
// 使用map的箭頭函式
Arr1.map((array) =>{
    console.log(array);
})
// 使用forEach的function
Arr1.forEach(function(array){
    console.log(array);
})
// 使用forEach的箭頭函式
Arr1.forEach((array) =>{
    console.log(array);
})
// sort 排序(字串)
var myArr = [];
for(var x = 0;x < Arr2.length;x++){
    myArr.push(Arr2[x]);
}
Arr2.sort();
console.log(Arr2);
console.log(myArr);

// sort 排序(數字)
// Arr1.sort(function(a,b){
//     return a - b;
// })
// console.log(Arr1);

Arr1.sort( (a,b) =>{return a-b}  )
console.log(Arr1);