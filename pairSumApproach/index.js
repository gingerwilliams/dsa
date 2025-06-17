/**
 * Pair Sum, Two Sum
 * take an array of numbers as input
 * take in a target sum
 * return a piar of indices that return a sum of the target
 * restraints:
 * can not take the same element twice, only unique indices
 */

const arr = [3,2,5,4,1]

// function bruteForce (arr, target) {
//     for(let i = 0; i < arr.length; i++){
//         for(let j = i+1; j < arr.length; j++) {
//             if (arr[i] + arr[j] === target) {
//                 return [i,j]
//             }
//         }
//     }
// }
// console.log(bruteForce(a, 8))

function pairSum (array, target) {
    const previous = {} //{ arrValue: index }

    for (let i = 0; i < array.length; i++){
        const num = arr[i];
        const compliment = target - num

        if(compliment in previous) {
            return [previous[compliment], i]
        }
        previous[num] = i
    }
    
    return previous
}

console.log(pairSum(arr, 8))
