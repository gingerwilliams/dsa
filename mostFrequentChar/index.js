
function most_Frequest (str) {
    let maxChar = "";
    const map = count_char(str)

    for (char in map) {
        if (!maxChar || map[char] > map[maxChar]) {
            maxChar = char
        } 
    }

    return maxChar
}


function count_char (str) {
    const count = {}

    for (char of str) {
        if (char in count) {
            count[char] += 1
        } else {
            count[char] = 1
        }
    }

    return count;
}

// console.log(count_char("ginger"))
console.log(most_Frequest("ginger"))