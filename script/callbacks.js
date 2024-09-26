function myDisplay(some){
  return (
    document.getElementById("demo").innerHTML = some
  )
}

// console.log(myDisplay('Hello'))

function first(){
  myDisplay('Hello')
}

function second(){
  myDisplay('GoodBye')
}


function myCalculator (num1, num2){
  let sum = num1 + num2
  myDisplay(sum)
}

myCalculator(6, 4)


function calculate(num1, num2, callback){
  let sum = num1 + num2
  callback(sum)
}
// calculate(4, 16, myDisplay)


// Asynchronous function

// setTimeout(myFunction, 5000)

function myFunction(){
  document.getElementById('demo').innerHTML =  "I ❤ YOU !!!"
}

setInterval (myFunc, 1000)

function myFunc(){
  let d = new Date()
  document.getElementById('call').innerHTML = 
  d.getHours() +':' + d.getMinutes() + ':' + d.getSeconds()
}


// JavaScript Promises
let myPromise = new Promise(function(resolve, reject){

  let x = 0;

  if (x == 0){
    resolve('OK!!!')
  } else{
    reject('Error')
  }
})

myPromise.then(
  function(value) {myDisplay(value)},
  function(error) {myDisplay(error)}
)