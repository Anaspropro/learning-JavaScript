// function sum (a, b){
//   return a + b;
// }

// let result = sum(1, 2);
// // console.log(result);  

// function checkAge(age){
//   if (age >= 18){
//     return true;
//   } else {
//     return confirm("Do you have your parent's permission?" )
//   }
// }

// let age = prompt('How old are you?')
// if (checkAge(age)){
//   alert(' Access granted ');
// } else {
//   alert(' Access denied ');
// }

// user = prompt('hello, what is your name? ');
// function greetUser(name){
//   alert(`welcome ${name}`)
// }

// greetUser(user);

function showPrime(n){
  for (let i = 1; i < n; i++){
    if (i % 2 == 0){
      continue
    }    
    console.log(i);    
  }
}

// showPrime(10);

