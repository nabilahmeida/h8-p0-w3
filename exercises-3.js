function dataHandling(noId, nama, tempat, tanggal, hobi){
    var input = [[noId, nama, tempat, tanggal, hobi]]
        
     for(var j = 0; j < input.length; j++) {
            console.log("Nomor ID: " + input[j][0]);
            console.log("Nama Lengkap: " + input[j][1]);
            console.log("TTL: " + input[j][2] +" " +input[j][3]);
            console.log("Hobi: " + input[j][4]);
   
        }
            return input = '';
    }
            console.log(dataHandling("0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"));
            console.log(dataHandling("0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"));
            console.log(dataHandling("0003", "Winona", "Ambon", "25/12/1965", "Memasak"));
            console.log(dataHandling("0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"));