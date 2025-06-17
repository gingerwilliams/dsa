/**
 * Intersection
 * Take two arrays as inputs
 * return a new array containing elements in common
 * order doesn't matter
 * Solution 1: nested loops, very slow, Time: O(n*m), Space: O(min(n,m))
 * Solution 2: hash data structure/set for shortest array 
 * loop the second comparing the values with the set
 * if pair exist push to int array
 * Time: O(n+m), Space: O(n)
 */

const arr1 = [4,2,1,6]
const arr2 = [3,6,9,2,10]
const int = []

const intersection = (a1, a2) => {
    const set = new Set(a1)
    for(let i=0; i < a2.length; i++) {
        if(set.has(a2[i])) {
            int.push(a2[i])
        }
    }
    return int
}

console.log(intersection(arr1, arr2))





