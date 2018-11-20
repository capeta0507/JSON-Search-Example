// 取陣列最大值
var Arr1=[1,5,18,17,2,3];
// 預設一個變數，可設定為陣列的第1筆，並用for loop做逐一列出，用比較來找出最大值
var max = Arr1[0];

    for (var x = 0;x<Arr1.length;x++){
        // if(Arr1[x] > max){
        //     max = Arr1[x]
        // }
        (Arr1[x] > max) ? max = Arr1[x] : max = max
    }

console.log(max)