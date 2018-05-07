function tentukanDeretGeometri(arr){
    var bagi = arr[1]/arr[0]; 
    for(var n = 0; n < arr.length-1; n++){
        if (bagi !== arr[n+1]/arr[n]){
            return false;
        }
    }
            return true;
}
console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false