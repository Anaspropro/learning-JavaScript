function myName(name){
  let greet = 'Hello, '
  return(
    console.log(greet + name)
  )
}
myName('Anas');


// function parameter
function sayHi(name){
  console.log('Hi ' + name)
}
sayHi('Zayd')

const sum =  (a, b = 7) => {
  return(
    console.log(a + b)
  )
}
sum(6)

// hoisting function: Invoking a function before declaring it...

greet();
function greet(){
  return(
    console.log('Hello!!!')
  )
}


// function expression

// Arrow function
const myArrowFunction = () => {
  return(
    console.log("this is an arrow function......!!!")
  )
}
myArrowFunction();

// Anonymous functions and self-invoking function

document.getElementById("demo").innerHTML = (function(){
  return (
    'I am a self-invoking function...'
  )
})

(() => {
  return(
    console.log("this is an arrow function......!!!")
  )
})

// function rest parameter
function rest (...args){
  let sum = 0;

  for(let arg of args) sum += arg;
  
  return console.log(sum)
}
rest(10, 20, 30, 33, 7, 82, 3, 56 )