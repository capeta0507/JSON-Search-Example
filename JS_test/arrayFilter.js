// 取小於8的數值
var Arr1=[1,5,8,17,2,3];
var Arr2=[];

var Arrx=[5,6,2,9,12,87,45,3,29,5,3,67,45,23];
var Arry=[];

// Arr2.push(Arr1[1])

// for(var x = 0;x<Arr1.length;x++){
//     // console.log(Arr1[x]);
//     if(Arr1[x]<8){
//         Arr2.push(Arr1[x]);
//     }
// }
myArrayFilter(Arr1,Arr2,15);
console.log(Arr2);

myArrayFilter(Arrx,Arry);
console.log(Arry);
// 設立函數，並預設一個範圍變數(comp)，只取比變數(comp)還小的值
function myArrayFilter(Arr1,Arr2,comp=12){
    for (var x = 0;x<Arr1.length;x++){
        if(Arr1[x] <= comp){
            Arr2.push(Arr1[x]);
        }
    }
}
