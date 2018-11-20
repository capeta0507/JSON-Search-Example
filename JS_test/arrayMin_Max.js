// 取陣列最大值
var Arr1=[1,5,18,17,2,3];
// 預設一個變數，可設定為陣列的第1筆，並用for loop做逐一列出，用比較來找出最大值
var max = arrayMax(Arr1);
var min = arrayMin(Arr1);
console.log(max);
console.log(min);

function arrayMax(myArr){
    var mymax = myArr[0];
    for (var x = 0;x<myArr.length;x++){
        (myArr[x] > mymax) ? mymax = myArr[x] : mymax = mymax
    }
    return mymax;
}
function arrayMin(myArr){
    var mymin = myArr[0];
    for(var y = 0;y<myArr.length;y++){
        (myArr[y] < mymin) ? mymin = myArr[y] : mymin = mymin
    }
    return mymin;
}

