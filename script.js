const zayd = {}
// javaSCript Object


const student = {
  firstName: 'Ayub',
  lastName: 'Akintunde',
  otherName: 'Ajagbe',
  isBoy: true,
  age: 33,
  fullName: function () {
    return( 
      "my name is : " + this.firstName + " " + this.otherName + " " + this.lastName
    )
  },
  cars: [ 
    'ferarri', 
    'toyota', 
    'nissan',
    'bentley', 
    'geely', 
    'honda', 
    'venza', 
    'acura', 
    'benz', 
    'highlander', 
    'lexus', 
    'hyunda'
  ]
}

student.class = "Gold"

console.log(student.fullName())

let fullName = student.firstName + " " + student.otherName + " " + student.lastName