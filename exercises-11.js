function tentukanDeretAritmatika(arr){
    var selisih = arr[1] - arr[0];

        for(var a = 0; a < arr.length-1; a++){
            if (selisih !== arr[a+1] - arr[a]){
                return false;
            }      
        }
                return true;
        }

console.log(tentukanDeretAritmatika([1, 2, 3, 80, 5, 6. ])); // true
// console.log(tentukanDeretAritmatika([2, 4, 6, 12, 14])); // false
// console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
// console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
// console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false