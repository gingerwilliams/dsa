const arr = [4,7,5,9,2]

const maxValue = (array) => {
    let max = Number.NEGATIVE_INFINITY;

    for (let i=0; i < array.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
        }
    }
    return max
}

console.log(maxValue(arr))

/*
Completity
    n = array length
    Time: O(n)
    Space: O(1) constant - tracking one variable
*/