function balikString(arr){
    var result = "";
    
   for(var a = 10; a >= 0 ; a--){
     result += arr[a];

   }
  return result;
}

    console.log(balikString("hello word!"));