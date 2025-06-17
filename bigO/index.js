// Constant time complexity
const a = 4;
const sum = a + 10;
// console.log(sum)

const str = "hello";
// console.log(str[1])

const stuff = { "a": 1, "b": 2, "c": 3 };
// console.log("b" in stuff) // true
// console.log(stuff["b"]) // 2

// Linear time complexity
const colors = ["red", "blue", "green", "yellow", "magenta"];
// console.log(colors.includes("green"))

const list = [5,9,2,-6,12,20,30,24];
let summ = 0;
// for (item of list) {
//     summ = summ + item
// }
// console.log(summ)

const sentence = "hello world, how are you?"
// console.log(sentence.split(" "))

const letters = ["a","b","c","d","e","f"]
// for (letter1 of letters) {
//     for (letter2 of letters) {
//         console.log(`${letter1} ${letter2}`)
//     }
// }
/**
 * n = letters length
 * time: O(n * n) -> O(n^2)
 */

const function2 = (n) => {
    // for (let i = 0; i < n/2; i++ ) {
    //     console.log(i)
    // }
}

function2(20)

/**
 * n = 20
 * time O(n * 1/2) -> O(n)
 * Space: O(1) constant space - no string or lists that grow
 */

const function3 = (n) => {
    // let nums = []
    // for (let i = 0; i < n; i++) {
    //     nums.push(i)
    // }
    // return nums
}

// console.log(function3(10))

/**
 * n = 10
 * time = O(n * 1) constant for push oeration as you are adding to the end of the list
 * space = O(n) for the list i will eventually return
 */

const function4 = (n) => {
    let nums = []
    for (let i = 1; i < n; i++) {
        nums.unshift(i)
    }
    return nums
}

console.log(function4(10))

/**
 * n = 10
 * time = O(n * n) -> O(n^2) unshift operation as you are shifting n numbers to the right every iteration
 * space = O(n) for the list i will eventually return
 * https://stackoverflow.com/questions/12250697/time-complexity-of-unshift-vs-push-in-javascript
 */

const function5 = (str) => {
    for (char1 of str) { 
        for (char2 of str) {
            console.log(`${char1}, ${char2}`)
        }
    }

    for (char1 of str) {
        console.log(`${char1}`)
    }
}

console.log(function5("My name is Ginger"))

/**
 * n = str.length
 * time = O(n * n + n) => O(n^2) In a sum you take the largest term dro the smaller term
 * space = O(1)
 */

/**
 * factorial O(n!)
 * exponential O(c^n)
 * polynomial O(n^c)
 * linear O(n)
 * logerithmic O(log(n))
 * constant O(1)
 */

Math.log()
Math.log2()
Math.log10()
