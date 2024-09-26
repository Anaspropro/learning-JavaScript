// Advance JavaScript Object 

// Defining JavaScript Objects:
// 1. Object Literals
// 2. using the new Keyword
// 3. using object constructors


// 1. Object Literals
const students = {
  Ayub: {gender: 'male', age: 33, class: 'gold'},
  wahab: {gender: 'male', age: 33, class:'gold'},
  zayd: {gender: 'male', age: 33, class:'gold'},
  kabeer: {gender: 'male', age: 33, class:'gold'},
}
const value = students.Ayub.class
console.log(value)

const person = {
  firstName: 'Anas',
  lastName: 'Aliu',
  gender: "male",
  level: "400",
  fullName: function(){
    return  this.firstName + " " + this.lastName
  }
}
console.log(person.fullName())


function Person (name, gender, age, status){
  this.name = name
  this.gender = gender
  this.age = age
  this.status = status
}
Person.prototype.nationality = 'nigerian'
Person.prototype.details = function(){
  return(
    'my name is ' + this.name + ", i am " + this.age + ' years old'
  )
}
 
const Ayub = new Person('Ayub', 'male', 33, 'gold',)
const zayd = new Person('zayd', 'male', 33, 'gold')
const wahab = new Person('wahab', 'male', 33, 'gold')
console.log(zayd)
console.log(wahab)

console.log(Ayub.nationality)
console.log(zayd.details())



person.car = 'porsche'
console.log(person)

