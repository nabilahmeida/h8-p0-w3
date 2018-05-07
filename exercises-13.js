function targetTerdekat(arr){
    var posisi = 0;
    var tampung = [];
    var simpan = [];
    var banding = [];

    for(var a = 0; a < arr.length; a++){
        if (arr[a] === "o"){
         posisi = a; 
        }
    }
     for(var b = 0; b < arr.length; b++){
         if(arr[b] === 'x'){
            tampung.push(b);
         }
     } 
     for(var n = 0; n < tampung.length; n++){
         var x = tampung[n] - posisi;
         simpan.push(x);
     }
         simpan.sort();
       var result =  simpan.slice(0, 1);
       var hasil = Math.abs(result);
       return hasil;
}
    console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
    console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
    console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
    console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
    console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2