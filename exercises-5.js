function palindrome(kata){
    var a = kata.split('').reverse('').join('');
    if( kata === a){
        return true;
    
    }
    else {
        return false;
    }

}

console.log(palindrome('katak')); //true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false