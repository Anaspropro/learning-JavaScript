
const cars = ['ferarri', 'toyota', 'nissan', false, 'geely', 22, 'venza', 'acura', 'benz', 'highlander', true, 'hyunda','BMW']

// console.log(cars)
// console.log(cars[4])


// Associate arrays
const names = []
names[0] = "Ayub"
// console.log(names)


// the new Array() method
const students = new Array()

students[0] = "wahab"
students[1] = 'Zayd'
students[2] = "Ayub"
students[3] = "kabir"
students[4] = "Hamzat"
students[5] = "Maryam"
students[6] = "Zaynab"

// console.log(student)

// console.log(cars.length)
// console.log(cars.sort())

const myCar = cars[cars.length - 1]
// console.log(myCar)


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

// document.getElementById("demo").innerHTML = text;

cars.push('porche')
// console.log(cars)

cars.pop()
// console.log(cars)



// The Difference Between Arrays and Objects


// In JavaScript, arrays use numbered indexes.  
// In JavaScript, objects use named indexes.


// Array.isArray()

let type = Array.isArray(cars)
// console.log(type)

let instance = cars instanceof Object
// console.log(instance)



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

// Day 5
// Array method continuation

const fruits = ['orange', 'mango', 'banana', 'cucumber', 'apple']
console.log(fruits[fruits.length - 5])

// array toString()
document.getElementById("demo").innerHTML = fruits.toString()


// Array join()
document.getElementById("demo").innerHTML = fruits.join(", ")


// Array at()
// console.log(fruits.at(-1))


// Array push() and pop()
// console.log(fruits.pop())

// Array push()
// fruits.push('lemon')
// console.log(fruits)

// Array shift()

// fruits.shift()
// console.log(fruits)

// fruits.unshift('watermelon')

// Array delete
// delete fruits[2]


const newArray = students.concat(fruits, 'kotlin', 'JavaScript', 'android')
console.log(newArray)
