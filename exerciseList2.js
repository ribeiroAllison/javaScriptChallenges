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


