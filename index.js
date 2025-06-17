/**
 * Pair Product Approach
 * return the index of two values whose product are equal to the target value
 * array and a target as a input
 */

const arr1 = [4,2,1,6]
const arr2 = [3,6,9,2,10]

const intersection = (array1, array2) => {
    const map = collection(array1)
    const int = []

    for (let i =0; i < array2.length; i++) {
        if (map[array2[i]]) {
            int.push(array2[i])
        } 
    }
    
    return int
}

const collection = (array) => {
    const hash = {}

    for (let i =0; i < array.length; i++) {
        hash[array[i]] = i
    }

    return hash
}

console.log(intersection(arr1, arr2))


