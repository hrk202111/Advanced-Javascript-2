const nums = [1,2,3,4,5,6,7,8,9]

// slice
const part = nums.slice(2, 5)        // akhane 2 theke 5 porjonto tule neya hobe
//splice
const removed = nums.splice(2, 5, 77)    // akhane prothom 2 mane 2 er por theke shuru ar 5 mane 5 ta sorate hobe and 77 sorano jaygai inject kora hoice

// console.log(removed);
// console.log(nums);

// join
const together = nums.join('ami ')    // sobgule join korbe..er vitor space , coma, lekha dite pari
console.log(together);