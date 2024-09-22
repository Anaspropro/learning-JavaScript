const cars = ['ferarri', 'toyota', 'nissan', false, 'geely', 22, 'venza', 'acura', 'benz', 'highlander', true, 'hyunda','BMW']

// console.log(cars)
// console.log(cars[4])


// Associate arrays
const names = []
names[0] = "Ayub"
// console.log(names)


// the new Array() method
const student = new Array()

student[0] = "wahab"
student[1] = 'Zayd'
student[2] = "Ayub"
student[3] = "kabir"
student[4] = "Hamzat"
student[5] = "Maryam"
student[6] = "Zaynab"

console.log(student)

console.log(cars.length)
console.log(cars.sort())

const myCar = cars[cars.length - 1]
console.log(myCar)


let carsLength = cars.length

let text = '<ul>';

// for (let i = 0; i < carsLength; i++ ){
//   text += '<li>' + cars[i] + '</li>'
// }

cars.forEach(myFunction)

text += '</ul>';

function myFunction (value){
  text += '<li>' + value + '</li>'
}

document.getElementById("demo").innerHTML = text;

cars.push('porche')
console.log(cars)

cars.pop()
console.log(cars)



// The Difference Between Arrays and Objects


// In JavaScript, arrays use numbered indexes.  
// In JavaScript, objects use named indexes.


// Array.isArray()

let type = Array.isArray(cars)
console.log(type)

let instance = cars instanceof Object
console.log(instance)



// Nested Arrays and Object
const myObj ={
  name: "John",
  age: 30,
  cars: [
    {name: "Ford", models: ["Fiesta", "Focus", "Mustang"]},
    {name: "BMW", models: ["320", "X3", "X5"]},
    {name: "Fiat", models: ["500", "Panda"]},
  ]
}

// Array join(), sort() method

numbers = [30, 5, 38, 22, 100, 10, 16]
numbers.sort(function(a,b){return a - b})
document.getElementById("demo").innerHTML = numbers.join(', ')

// document.getElementById("demo").innerHTML = numbers