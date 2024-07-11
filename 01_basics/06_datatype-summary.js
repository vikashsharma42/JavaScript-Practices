/**
 * In Js there are two types of data 1>PRIMITIVE 2>REFRENCE
 * Primitive :- There are 7 types
 * String , Boolean , Number , Null , Undefined , BigInt , Symbol
 * 
 * */
 
const score = 100 
const scoreValue = 100.6
const isLoggedIn = false
const bigNumber =15987534621479n
let userEmail;

const id = Symbol('wb229')
const newId = Symbol('wn229')
console.log(id === newId);
console.log(typeof(id))
console.log(typeof(newId))


 /**
  
 * Refrence(Non-Primitive)
 * Array , Object , Function
 * 
 *  */ 

 const god = ['Shree Ram' ,'Shiv Shankar' , 'Hanuman ji' , 'Bhrambha ji' , 'Ganesh ji']
 console.log(god);
 console.log(typeof(god))

 let myDetails = {
    Name : "Vikash Kumar",
    Age : 21,
    EmailId : "Vika***********09@gmail.com",
    Phone : "62******84",
    city : "Gurgoan",
    Destination : "Assistance Software Developer",
    Company : "Webority Techonology"
 }
 console.log(myDetails)
 console.log(typeof(myDetails))

 let myFunction = function () {
    console.log("Welcome to my world...")
 }
 console.log(typeof(myFunction))

 /**
  * Return type of variables in JavaScript
  * 1) Primitive Datatypes
  *        Number => number
  *        String  => string
  *        Boolean  => boolean
  *        null  => object
  *        undefined  =>  undefined
  *        Symbol  =>  symbol
  *        BigInt  =>  bigint
  * 
  * 2) Non-primitive Datatypes
  *        Arrays  =>  object
  *        Function  =>  function
  *        Object  =>  object
  * 
  */
