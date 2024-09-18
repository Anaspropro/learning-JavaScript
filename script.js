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
  }
}

student.class = "Gold"

console.log(student.fullName())


