function groupAnimals(arr){
    var result = [];
    var urutin = arr.sort();
    // list dahulu input nya 
    for(var a = 0; a < arr.length; a++){
        var satu = [];

    // apakah result masih kosong ? 
      // jika kosong maka langsung masukan ke group baru 
      // lalu masukkan group baru tersebut ke result 
       if(result.length === 0){
           satu.push(arr[a]);
           result.push(satu);
       }
       else{
           // kalau result tidak kosong maka : 
           // masukkan datanya ke group yg sudah ada 
           for(var b = 0; b < result.length; b++){
               var isGroup = true; // variable ini memutuskan sebuah hewan
               // apakah masuk ke group yg sudah ada atau bikin group
               for(var c = 0; c < result[b].length; c++){
                    // syarat masuk ke group yg sudah ada .
                    // yaitu jika huruf depannya sama 
                    if(arr[a][0] === result[b][c][0]){ //jika huruf pertama sama dengan huruf pertama yang sudah ada
                        result[b].push(arr[a]); // masukkan data hewan ke group yg sudah ada 
                        isGroup = false; // set jadi false yg artinya dia gak buat group baru 
                        break;
                    }
                    
               }
               
           } // akhir for, pengecekan selesai 
           // setelah selesai check data 1 hewan ke result 
           if(isGroup)
               {
                    satu.push(arr[a]);
                    result.push(satu); 
               }
       }
    }
   return result;
}
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'] ]