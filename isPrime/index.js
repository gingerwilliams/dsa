// prime is a number that is only divisible by one and itself
// 7
// possible factors 2,3,4,5,6
// 9 
// possible factors 2,3,4,5,6,7,8
/**
 * Complexity
 * n = input number
 * Time: O(n)
 * Space: O(1) constant handful of variable no scaling structures
 */
// 64 
// check factors up to sqrt(n) only
/**
 * Complexity
 * n = input number
 * Time: O(sqrt(n))
 * Space: O(1) constant handful of variable no scaling structures
 */

// function isPrime (num) {
//     //edge case
//     if num < 2
//         return false

//     for(let i = 2; i < num; i++) {
//         if (num % i === 0){
//             return false
//         }
//     }
//     return true
// }

// study this

function isPrime (num) {

    for(let i = 2; i <= Math.floor(Math.sqrt(num)); i++){
        if (num % i === 0){
            return false
        }
    }
    return true
}

console.log(isPrime(49))