// let ch = 'a' < 'B'
// console.log(ch)

var nextGreatestLetter = function(letters, target) {

    for (let i = 0; i < letters.length; i++) {
        if (letters[i] > target) {
            return letters[i];
        }
    }

    return letters[0];
};

let letters = ["c","f","j"]
let target = "g"

console.log(nextGreatestLetter(letters, target));