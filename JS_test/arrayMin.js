// 取陣列最大值
var Arr1=[1,5,8,17,2,3,-5];
// 預設一個變數，可設定為陣列的第1，，並用for loop做逐一列出，用比較來找出最小值
var min = Arr1[0];
myArrayMin(Arr1,min);

function myArrayMin(myArr,myMin){
    for (var x = 0;x<myArr.length;x++){
        if(myArr[x] < myMin){
            myMin = myArr[x]
        }
    }
    min = myMin;
}
console.log(min)