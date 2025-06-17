/**
 * Strings that contain the same characters in any order
 * get a count of every character in the respective strings
    create a hash map (objects) for each string 
    abbcd {a: 1, b: 2, c:1, d:1}
    caddb {a: 1, b: 2, c:1, d:2}
    false
    non-primitive data types are compared by reference not value

 */

function anagrams (s1, s2) {
    const map1 = char_count(s1)
    const map2 = char_count(s2)
    const keys1 = Object.keys(map1)
    const keys2 = Object.keys(map2)

    // if the legth is different return false
    if (keys1.length !== keys2.length) {
        return false;
    }

    for (let key of keys1) {
        if (map1[key] !== map2[key]) {         
            return false;
        }
    }
    return true
}

function char_count (str) {
    let count = {}

    for (char of str) {
        if (char in count) {
            count[char] += 1
        } else {
            count[char] = 1
        }
    }

    return count
}

// console.log(char_count("catz"))
console.log(anagrams("cats", "tacs"))

/**
 * n = string1 length
 * m = string2 length
 * Time: O(n+m)
 * Space: ~O(n+m) have to create and store two maps
 */