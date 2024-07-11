 console.log(2 > 1)
 console.log(2 == 2)
 console.log(2 === "2")
 console.log(2 != 4)
 console.log(2 < 8)
 console.log(2 == 0)


console.log(null == 0)
console.log(null > 0)
console.log(null < 0)
console.log(null >= 0)

console.log(undefined == 0)
console.log(undefined > 0)
console.log(undefined < 0)
console.log(undefined != 0)
console.log(undefined >= 0)

/**
 * The reason is that an equality check == and comparisation <,>,>=,<= works differentaly.
 * Comparisition convert null to a number, treating it as 0.
 * That's why (3)null >= 0 is true and (1)null > 0 is false
 */
