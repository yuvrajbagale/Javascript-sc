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
// **********************************************************************************
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

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Prototypal inheritance
// hum objects create karte hai and k isi ek parent constructor function ke prototype mein kuchh add kr dete hai and jab bhi add hota hai to wo parent se banne waale sabhi children instances ko wo properties jo parent ko prototype mein di gayi thi wo miltl hai saugaat mein.

// function makeHuman(name, age) {
//   this.name = name;
//   this.age = age;
//   this.printMyName = function () {
//     console.log(this.name);
//   }
// }

// let human1 = new makeHuman("yuvraj", 25);
// let human2 = new makeHuman("yuvi", 26);

// ek function jo ki this ka upyog kr raha ho and new ke dwaara naye naye objects bana kar deta ho aise function ko constructor function kahate hai

// function abcd(){
//   this.username = "yuvraj";
// }
// let ans = new abcd()

// aisa koi bhi function jismein app this ka upyog kar rhe ho aur us function ko call karte waqt aap new ka upyogog karein, to new ka matlab waha par ek blank object hojaata hai

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Closures
//  Ek function jo return kare doosra function, aur use kare parent function ka koi variable

// function abcd() {
//   var a = 12;
//   return function(){
//     console.log(a)
//   }
// }

// event Delegation = jab app event listener se kai saare different elements ke events ko handle kar sake
// Event listener ko parent par lagao and unko id, class ya fir tag ke basis par differentiate karke different task karvavo

// var parent = document.querySelector("#parent");

// parent.addEventListener("click", function (details) {
//   if (details.target.id === "play") {
//     console.log("play songs");
//   } else if (details.target.id === "pause") {
//     console.log("pause songs");
//   }
// });

// hofs- higher order functions
// aisa koi func jo ki ek fnc ko parameter mein accept karle and/or ek function ko return karde

// Error handling like pro - try catch
// function divide(a, b) {
//   try {
//     if (b === 0) {
//       throw Error("Kuch to gadbad hai");
//     }
//     console.log(a / b);
//   } catch (err) {
//     console.error(err);
//   }
// }

// divide(12, 0);

//Async js

// aisa koi bhi code jismain khuch time lagta hai, js mein use by default in most cases async code maan kar side stack mein daal diya jaata hai
// settimeout - settimeout ka code kuchh der baad chalta hai

// console.log("hey1");
// console.log("hey2");
// setTimeout(() => {
//   console.log("hey3");
// });
// console.log("hey4");

// setinterval - settimeout ka code kuchh der baad chalta hai set interval ka code kuchh der baad chalta hai baar baar ek particular interval time mein

let count = 0;
const humarainterval = setInterval(function () {
  ++count;
  console.log(count);
  if (count === 5) clearInterval(humarainterval);
}, 2000);

// Fetch API — ye kisi aur url par jaa kar kuchh data laayega ya data humaare paas se us url par lekar jaayega
// kyuki ye internet par jaayega aur fir data ko lekar aayega to ismein time lagta hai to by default hi j s mein fetch ko async banaaya gaya hai kyuki fetch ka kaam hai data laana wo bhi kisi url se ab aisa ho skta hai us url ki website slow ho, to data laane mein time lage aur agar fetch synchronous hota to uske baad ka code tab tak nahi chalta jab tak uska data nahi aajata, which is a big problem, poora code aatak sakta tha.

// jaao panchhi letter lekar aao

fetch(`https://randomuser.me/api/`);

// Axios (or other HTTP libraries) - ye bhi wahi karega ye thoda jaada developer friendly hai
// promise - ye janaab ke andar jo code likhoge wo apan khud side stack mein chale jaayege us code ko lekar aur resolve kiya jaayega tab ye chalebe jo fetch karta hai bas kaam ka rega aur jab andar se coe

// promises kya hai ?
// kuchh code socho man mein, jo ki async code ho, mat lab ki ye side stack mein jaayega aur baad mei chalega main stack ke, ab ye socho ki aapne is code ko likha hai to iska answer kabhi aayega aur aisa bhi ho sakta hai kis answer naa aaye, promises kya hai aisa samjho ki aap promise ke andar koi bhi async code likhdo jo man mein aaye aur promise aapko ek parchi dedeta hai and wo parchi par by default likha hota hai waiting,

// ye sabhi use hi tab kiye jaate hai jab aapko kuchh aisa karna ho jismain time lagela
