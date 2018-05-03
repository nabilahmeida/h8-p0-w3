function pasanganTerbesar(angka) {
    var arr = [];
    var string = angka.toString();
    for(var a = 0; a < string.length -1; a++){
        var kesatuan = string[a] + string[a + 1];
        var num = Number(kesatuan);
        arr.push(num);
        
    }

    arr.sort();
    var terbesar = arr[arr.length -1];
    return terbesar;
}

console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99