/**
 * Pair Product
 * take an array of numbers as input
 * take in a target product
 * return a piar of indices multipying to our target
 * restraints:
 * can not take the same element twice, only unique indices
 * solution: hashmap, key = items of array, value = indices of array
 * during iteration find the complement of the item: complement  = target/sum
 * your target needs a product so do the INVERSE to get complement
 * then check hashmap for the complement
 * store the pair {4: 0}
 * return the idices of the pair that matches
 */


const arr = [4,7,9,2,5,1]
const tar = 35
const previous = {}

const pairProduct = (array, target) => {

    for(let i = 0; i < array.length; i++) {
       const complement = target/array[i] 
       if (previous[complement]) {
            console.log("pair:: ", i, previous[complement])
            return [i, previous[complement]]
       } 
       previous[array[i]] = i
    }
}

pairProduct(arr, tar)


/**
 * Complexity
 * n = array lenght
 * Time: O(n)
 * Space: O(n)
 */
