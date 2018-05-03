function angkaPalindrome(num){
    var cek = true;
    while(cek){
        num++;
        var string = String(num);
        var stringbalik = string.split('').reverse().join('');
        if (string === stringbalik){
            return Number(string);
        }
    }
}

    console.log(angkaPalindrome(8));
    console.log(angkaPalindrome(10));
    console.log(angkaPalindrome(27));
    console.log(angkaPalindrome(175));
    console.log(angkaPalindrome(1000));