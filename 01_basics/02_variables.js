const accountId =489657895
let accountHolder = "Vikash Kumar"
var accountPhone ="62******84"
city = "Gurgoan"

let accountStatus;//If we create a variable and does not assign any value then it is undefine. 

/**
 * We can not change the value of variables that is declared by using const keyword.
 * accountId = 1489652357
 * console.log(accountId);*/

// We can change the value of variables that is declared by using let or var keyword or withought keywords.

city = 'Noida'
accountHolder = 'Vikash Sharma'
accountPhone ='94******31'
console.log('Account is '+accountId +'\n'+'Account holder name is '+accountHolder+'\n'
  +'Account holder phone number is '+accountPhone+'\n'+'Account holder city is '+city);

// Code to show in tabular form
console.table([accountHolder, accountId, accountPhone, city, accountStatus])


/**
 * Prefer to does not use Var variables
 * because of issue in block scope and functional scope
 */
