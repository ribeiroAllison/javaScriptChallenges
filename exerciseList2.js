// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.

let str = "This website is for losers LOL!";
let brStr = 'Este site é para perdedores LOL!';



const disemvowel = str =>{
    const vowels = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U'];
    let noVowels = [];
    for (letters of str){
        if(vowels.includes(letters) === false){
            noVowels.push(letters);

        }
    }
    let noVowelsStr = noVowels.join('');
    return noVowelsStr;
};

console.log(disemvowel(brStr));


//EXERCÍCIO 2

// A pangram is a sentence that contains every single letter of the alphabet at least once. 
//For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, 
//because it uses the letters A-Z at least once (case is irrelevant).
// Given a string, detect whether or not it is a pangram. 
//Return True if it is, False if not. Ignore numbers and punctuation.

const isPangram = phrase => {
    const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','x','w','y','z'];
    let lettersInPhrase = [];
    for(letters of phrase.toLocaleLowerCase()){
        if (!lettersInPhrase.includes(letters) && alphabet.includes(letters)){
        lettersInPhrase.push(letters);
        };
    };
    

    if(lettersInPhrase.length === alphabet.length){
    return true;
    } else {
    return false;
    };
};

console.log(isPangram("The quick brown fox jumps over the lazy dog"));



