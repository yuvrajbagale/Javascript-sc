// types = primitive dt || reference dt
// 12, 12.4, yuvraj, true, a, null, undefind
// {} [] () - reference dt

// var a = 12;
// var a = 12.1:
// var a = true;
// var a = [],
// var a = false;
// var a = null;
// var a = undefind;

/** 
*****************************************Conditions******************************
jabbhi apko ek program mein descion lena ho ki aage ka execution kaisa ho to waha par if else else-if use hota hai
// conditionals
case
= if else else-if ternary operator switch

// if mei humesha true ya false aata hai

// har value ko true ya false banaya jaa skta hai, ye depend krta hai, ki wo value ka type kya hai, agar wo value, truthy hai to true banegi and falsy hai to false

// null undefined NaN 0 "" '' document.all false
// aaki sab truth 1 
 
*/

/**
 jab tak poora solve naho jaye tabtak - barbar karnar
 5 bat hello bolo
 50 bar hellow karo
 loop ka matal repetetion 
 */

/** 
  for(start; end; chnage){
  
  }
  1-10
  for(let i=1; i<11; i++){
  
  }
  25-50
  for(let i=25; i<51; i++){
  }
  35-40
  for(let i=35; i<41; i++){
  }
  20-5
  for(let i=20; i>4; i--){
  }
  5-1
  for(let i=5; i>0; i--){
  }
 */
/** 
for (let num = 5; num < 10; num++) {}
*/
// functions - js mein function normal programming language jaise nahi hai, iska mat lab hai, yaha par js mein, functions banaane ke 1 iye type nahi batana padta bas aapko function word likhna padega and aap usey koi naam deke bana skte ho
// indepth - js mein functions first class functions ka darja diya gaya hai, jiska mat lab hai, ki js mein function koi value ki taraha treat kiya ja sakta hai

// what is function
// koi aisa code jo aap ko bar bar use karna ho, ya koi aisa code jis ko aap ko turant nahi chalana ho ya kabhi chala na hot use hum function main dal shakte hai

// why we need
// how to use

// extra use should know

// Understanding this call apply bind
// this keyword js main one of the most suspenseful keyword hai
// keyword ka matlab hota hai aisa word jiska koi matlab ho programming lang mein
// this ki value baar baar badal shakti hai alag alag conditions mein, saari conditions ko seekh jaao to this ko samajh sakte ho
// global - window

// console.log(this);
// // function

// function abcd() {
//   console.log(this);
// }
// abcd();

// // method

// let obj = {
//   name: function () {
//     console.log(this.age);
//   },
//   age: 25,
//   email: "abcd@gmail.com"
// };
// obj.name();

// // fnc inside method (es5) - window
// // function jo method ke andar hai
// let obj2 = {
//   sayName: function(){
//     console.log(this); // object
//     function chindfnc(){ // rebind krta hai window ko
//       console.log(this); // window
//     }
//     chindfnc();
//   }
// }
// obj2.sayName();
// // fnc inside method (es6) - object
// let obj3 = {
//   sayName: function(){
//     const child = ()=>{ 
//       console.log(this);
//     }
//     child(); // object
//   }
// }
// obj3.sayName();
// // constructor fnc mein this ki value - new blank object
// function add(){
//   console.log(this);
// }
// let ans = new add(); // new ky krata hai blank object banata hai
// // jis function aap new se chala te hai to use contructor function bulate hai
// // event listener mein this ki value - that element jispar event lis. laga ho

// document.querySelector("button")
// .addEventListener("click", function(){
//   console.log(this);
// })
**********************************************************************************
//call apply bind
// ye teen tarike hai function ko call karne ke kisi object ko this maan kr 

// let obj = {name:"yuvraj"}

// function abcd(){
//   console.log(this);
// }
// abcd.call(obj); // 

// // apply

// function abcd(a,b,c){
//   console.log(this);
// }
// abcd.apply(obj,[1,2,3])

// // bind

// function abcd(){
//   console.log(this);
// }

// let baadmechalanekeliyefunc = abcd.bind(obj);
// baadmechalanekeliyefunc();


++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Prototypal inheritance


