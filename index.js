"use strict"
document.getElementById("click").style.backgroundColor = "red";
//document.querySelector("h1").style.visibility = "hidden";
document.getElementById("txts").innerHTML = "<em>sambo</em>";
document.querySelector("a").setAttribute("href", "https://www.apple.com/");

document.querySelector("h2").classList.toggle("sample");

document.querySelector("h2").classList.toggle("sample");




function myFunction() {

  let x = document.getElementById("demo");
  const alpha = "ABCDEFabcdef";
  var alphas = alpha[Math.floor(Math.random() * alpha.length)]
  var alphas1 = alpha[Math.floor(Math.random() * alpha.length)]
  var alphas2 = alpha[Math.floor(Math.random() * alpha.length)]

  var gen = Math.random();
  gen = gen * 9 + 1;
  gen = Math.floor(gen);
  var gen1 = Math.random();
  gen1 = gen1 * 9 + 1;
  gen1 = Math.floor(gen1);
  var gen2 = Math.random();
  gen2 = gen2 * 9 + 1;
  gen2 = Math.floor(gen2);
  var res = alphas + gen + alphas1 + gen1 + alphas2 + gen2;
  x.style.backgroundColor = "#" + res;

  //console.log(res);

}
setInterval(myFunction, 4000);
function defaultBack() {
  document.getElementById("demo").style.backgroundColor = "white";
}
var x = "face.jpg";
function imgChange() {

  var img = document.getElementById("img");
  if (x == "face.jpg") {
    img.src = "face2.jpg";
    x = "face2.jpg";
  }
  else {
    img.src = "face.jpg";
    x = "face.jpg"
  }
}

var timer = setInterval(imgChange, 5000);

function showIt() {
  var txt = document.getElementById("txt");
  if (txt.value == "") {
    return document.getElementById("welcome").innerHTML = "<em>Error</em>";
  }
  else {
    return document.getElementById("welcome").innerHTML = `Welcome ${txt.value}`;
  }

}

//console.log(txt);


//difference between var, let and const
//var the value outside the block(global variable) can still
// overwritten to the recent value assigned to the variable
var x = 2;

{
  var x = 10;
}

console.log(x); //x =10 (recent value assigned)

//let doesnt allow value inside a block overwite 
//the value declared outside the block
let y = 2;
{
  let y = 10;
}

console.log(y); // x=2 (value assigned outside the block)
//const it cannot be redeclared or reassigned
//(const PI = 3.141592653589793;
//PI = 3.14;      // This will give an error
//PI = PI + 10;)   // This will also give an error
// You can create a constant array:
const cars = ["Saab", "Volvo", "BMW"];

// You can change an element:
cars[0] = "Toyota";

// You can add an element:
cars.push("Audi");

const car = { type: "Fiat", model: "500", color: "white" };

console.log(car["type"]);

//try
// var time = 0;
// function timeStamp() {
//   var show = document.getElementById("show");
//   for (let count = 0; count <= 59; count++) {
//     time+=1;
//     console.log(time);
//     show.innerHTML= time;

//   }
  
// }
// setTimeout("timestamp()", 60000);

function countDownTimer() {
  const difference = +new Date("2022-05-31") - +new Date();
  let remaining = "Time's up!";

  if (difference > 0) {
    const parts = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
    remaining = Object.keys(parts).map(part => {
    return `${parts[part]} ${part}`;  
    }).join(" ");
  }

  document.getElementById("countdown").innerHTML = remaining;
}

countDownTimer();
setInterval(countDownTimer, 1000);

//string search
let strs = "Please locate where 'locate' occurs!";
strs.indexOf("locate");
console.log(strs.indexOf("locate"));


//lastIndexof()
let str = "Please locate where 'locate' occurs!";
str.lastIndexOf("locate");
console.log(str.lastIndexOf("locate"));

let header = "Header";
let list = ["head", "body","leg"];
let html = `<h2>${header}</h2><ul>`;

for (const x of list){
html+=`<li>${x}</li>`;
}
html+="</ul>";
document.getElementById("head").innerHTML=html;


//The global JavaScript function parseInt() converts strings to numbers
parseInt("-10") + "<br>" +
parseInt("-10.33") + "<br>" +
parseInt("10") + "<br>" +
parseInt("10.33") + "<br>" +
parseInt("10 6") + "<br>" +  
parseInt("10 years") + "<br>" +  
parseInt("years 10");  
//console.log(parseInt("-10"))

//Numbers() can be used to convert JavaScript variables to numbers
Number(true);
Number(false);
Number("10");
Number("  10");
Number("10  ");
Number(" 10  ");
Number("10.33");
Number("10,33");
Number("10 33");
Number("John");
//console.log(Number(true));


//The Number() method returns the number of milliseconds since 1.1.1970.
let a = new Date("2022-05-29");
console.log(Number(a)) ;

//parseFloat() parses a string and returns a number. Spaces are allowed. Only the first number is returned:
parseFloat("10");
parseFloat("10.33");
parseFloat("10 20 30");
parseFloat("10 years");
parseFloat("years 10");


const arr = ["steph", "stella", "tola"];
const arrs = ["timi", "dave","sam"];
const arrNum = ["25", "19", "45" , "2", "39"];
//he JavaScript method toString() converts an array to a string of (comma separated) array values.
console.log(arr.toString());

//The join() method also joins all array elements into a string.
//It behaves just like toString(), but in addition you can specify the separator:
console.log(arr.join(" "))

//The pop() method removes the last element from an array:
console.log(arr.pop());
console.log(arr);

//The push() method adds a new element to an array (at the end):
console.log(arr.push("tola"));
console.log(arr);

//The concat() method creates a new array by merging (concatenating) existing arrays:
console.log(arr.concat(arrs).join(" "))
console.log(arrs.sort());
console.log(arrNum.sort(function(a,b) {return a - b}));

//The forEach() method calls a function (a callback function) once for each array element.
//A callback, as the name suggests, is a function that is to execute after another function has finished executing

let reveal = "";
arrNum.forEach(callBack)
console.log(reveal);
function callBack(value, index, array){
  reveal+= `${value}, `  ;
}

let bee = ["a", "b" , "c"];
let done ="";
for (const x of bee){
  done += `${x}, `;
}
console.log(done);

//JavaScript Array map()
//The map() method creates a new array by performing a function on each array element.

//The map() method does not execute the function for array elements without values.

//The map() method does not change the original array.

//This example multiplies each array value by 2:
console.log(arrNum.map(callBacktwo));

function  callBacktwo (value){
  return value*3;
}

//filter()
console.log(arrNum.filter(value => value > 18));


//Date objects are created with the new Date() constructor.
//new Date(year, month, day, hours, minutes, seconds, milliseconds)
//new Date(milliseconds)
//new Date(date string)

const d = Date();
console.log(d);

const nd = new Date();
console.log(nd);

const tryArr = {
  firstName: "kola",
  lastName: "kolawole",
  others: function (){
    return `${this.age}, ${this.gender}` 
  },
  otherName: function() {
    return `${this.firstName} and ${this.lastName}`
  }
}

const tryArr2 = {
  age : "22",
  gender: "male",
  firstName: "joseph",
  lastName: "abimbola",
  
}

console.log(tryArr.others.call(tryArr2))

console.log(tryArr.otherName.bind(tryArr2))
var into="";
arrNum.map(value => into+=`${value*10}, `)
console.log(into)

console.log(strict);
var strict = 5;

//arrow functions
// vals="lol";
// hello = val => vals = val;

//class are template for js object

class house {
  constructor(type, size, year, room){
    this.type = type;
    this.size = size;
    this.year = year;
    this.room= room;
  }

  years(){
let nyear = new Date();
return nyear.getFullYear() - this.year;

  }
  rooms(r){
    if (this.room>r){
      return "your house can't be bungalow";
    }
    else{
      return `you have ${r} rooms`;
    }
  }
}

class gadget extends house {
  constructor(year, price){
    super (year);
    this.price = price;
  }
  typeOfGadget(name){
return `Your speaker name is ${name}, produced in the year ${this.year}  which cost ${this.price}.`
  }
}


setInterval(theTime, 1000)
function theTime(){
  const currentTime = new Date();
  document.getElementById("theTime").innerHTML = currentTime.getHours()+" : "+currentTime.getMinutes()+" : "+currentTime.getSeconds();

}







let spaceRoom = 4;
let simpGen = Math.floor((Math.random()*10)+1)
const house1 = new house("bungalow", "2plots", 2000, simpGen);

const speakerName = ["samsung", "dj jack", "sony", "LG"]
let speakerNum = Math.floor(Math.random()*4);
const speaker = new gadget(2020, "100,000");

 console.log(house1.years());
console.log(house1.rooms(spaceRoom));
console.log(speaker.typeOfGadget(speakerName[speakerNum]));
//modules it helps you to break up youe code into seperate files. that makes it easier to maintain the code base.
import { man, woman } from "./another.js";

//to use module you have to set the script type to module
console.log(`God created ${man} first before ${woman}`)

//asynchronous function is when functions are runningin parallel waiting for one 
//--function to load before before the other
//the example below shows that the external source has to wait to load before the website load before been displayed
function loader(script){
  document.getElementById("file").innerHTML= script
}

function theLoader(asyncCall){
  let req = new XMLHttpRequest()
req.open('GET', "modal.html")
req.onload = function (){
  if (req.status == 200){
    asyncCall(this.responseText)
  }
  else{
    asyncCall(`Error: ${req.status}`)
  }
}
req.send()
}
theLoader(loader)
//JSON is a format for storing and transporting data


//promises 
//"Producing code" is code that can take some time

//"Consuming code" is code that must wait for the result

//A Promise is a JavaScript object that links producing code and consuming code

function promiseAns(answer){
console.log(answer);
}

let myPromise = new Promise(function promExecute(myResult, myError){
  let x = 0;

  if(x === 2){
    myResult(`my result is correct ${x}`)
  }
  else{
    myError("Error displaying result")
  }
})

myPromise.then(
  function(value){promiseAns(value);},
  function(error){promiseAns(error);}
)

//react
//super(): It is used to call the constructor of its parent class
//class TodoApp extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { items: [], text: '' };
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

