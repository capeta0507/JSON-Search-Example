// 取陣列最大值
var Arr1=[1,5,8,17,2,3];
// 預設一個變數，可設定為陣列的第1筆，並用for loop做逐一列出，用比較來找出最大值
var max = Arr1[0];
myArrayMax(Arr1,max);

function myArrayMax(myArr,myMax){
    for (var x = 0;x<myArr.length;x++){
        if(myArr[x] > myMax){
            myMax = myArr[x]
        }
    }
    max = myMax;
}
console.log(max)