console.log(1 + 4 + "6")
console.log("1" + 4 + 6)

console.log(2 * 6 + 5 % 2 / 5)

/**
 * In above situtation accournig to precidence the operation wiil be perform
 */

let score = 120
const newScore = score++
console.log(`Score:${score} , newScore:${newScore}`)

let point = 169
const newPoint = ++point
console.log(`Points:${point} , newPoints:${newPoint}`)


/**
 * If we used postfix, with operator after operand (for example, x++), the increment operator increments and returns the value before incrementing.

If we used prefix, with operator before operand (for example, ++x), the increment operator increments and returns the value after incrementing.
 */