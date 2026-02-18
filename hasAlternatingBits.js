var hasAlternatingBits = function(n) {
    
    let binary = n.toString(2)
    const number = binary;
    const digitsArray = Array.from(String(number), Number);
    for (let i = 0; i < digitsArray.length - 1; i++) {
        if (digitsArray[i] === digitsArray[i + 1]) {
            return false;
        }
    }
    return true;
};


let n = 5;
console.log(hasAlternatingBits(n))