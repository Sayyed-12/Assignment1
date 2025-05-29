const words = ["javascript", "array", "method", "function", "variable", "object", "string"];

// 6a) Find the longest word
const longestWord = words.reduce((longest, word) => word.length > longest.length ? word : longest, "");
console.log("  Longest word:", longestWord);
 

// 6b) Calculate the total number of characters across all words
const totalChars = words.reduce((sum, word) => sum + word.length, 0);
console.log("  Total number of characters:", totalChars);

 

// 6c) Count how many words contain the letter 'a'
const countWordsWithA = words.filter(word => word.includes('a')).length;
console.log("  Number of words containing 'a':", countWordsWithA);

// 6d) Create a single string with all words joined by commas
const joinedWords = words.join(',');
console.log("  All words joined by commas:", joinedWords);

// 6e) Find the word that comes first alphabetically
const firstAlphabeticalWord = [...words].sort()[0];
console.log("  Word that comes first alphabetically:", firstAlphabeticalWord);
