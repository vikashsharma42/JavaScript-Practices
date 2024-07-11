//    Heap & Stack

let userId = "sharmag@gmail.com"

let anotherUserId = userId
anotherUserId = "sharmag@yahoo.com"

console.log(userId)
console.log(anotherUserId)

let paymentDeatils = {
    Upi : "159876.@ybl",
    paymentTime : "04:05:33"
}

let newPaymentDetails = paymentDeatils

newPaymentDetails.Upi = "478965.@icic"
newPaymentDetails.paymentTime = "06:32:01"

console.log(newPaymentDetails)
console.log(`Upi id of first payment `+newPaymentDetails.Upi +'\n' +`Payment time of first payment `+newPaymentDetails.paymentTime+'\n')
console.log(`Upi id of second payment `+newPaymentDetails.Upi+'\n'+`Payment time of second payment `+newPaymentDetails.paymentTime);

// HEaP -->When we change the value in copies elements then it's actually change the Original values.

/**
 * 
 * STACK -->When we change the value in copies elements then it does not change the original values,
 * because it creates the copy of origal values. 
 */