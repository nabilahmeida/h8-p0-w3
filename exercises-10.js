function perkalianUnik(arr){
    var hasil = [];
    var kali = 1;
    var bagi = [];
    for(var j = 0; j < arr.length; j++){
         kali = kali * arr[j];   
    }
    for(var i = 0; i < arr.length; i++){
        
        var a = kali/arr[i]
        bagi.push(a);        
    }
     return bagi;
}
    console.log(perkalianUnik([1, 3, 3, 1])); // [9, 3, 3, 9]