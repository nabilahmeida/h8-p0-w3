var x = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca" ];
function dataHandling2(input){
    input.splice(2, 0, input[1]+' Elsharawy');
    input.splice(1, 1);
    input.splice(2, 0, 'Provinsi ' + input[2]);
    input.splice(3, 1);
    input.splice(5, 0, "Pria");
    input.splice(6, 0, "SMK Internasional Metro");
    console.log(input);

    var pisah = input[3].split("/");
    var bulan = Number(input[3][4]);
    var tanggal = input[3].split("/").join('-');
    var desc = pisah.sort(function(a, b){return b - a});
    var nama = input[1].slice(0, 15);
    switch (bulan){
        case 1 : bulan = 'Januari'; break;
        case 2 : bulan = 'Februari'; break;
        case 3 : bulan = 'Maret'; break;
        case 4 : bulan = 'April'; break;
        case 5 : bulan = 'Mei'; break;
        case 6 : bulan = 'Juni'; break;
        case 7 : bulan = 'Juli'; break;
        case 8 : bulan = 'Agustus'; break;
        case 9 : bulan = 'September'; break;
        case 10 : bulan = 'Oktober'; break;
        case 11 : bulan = 'November'; break;
        case 12 : bulan = 'Desember'; break;    
    }
   
    console.log(bulan);
    console.log(desc);
    console.log(tanggal);
    console.log(nama.toString());
    
   
}

   dataHandling2(x);
   
    