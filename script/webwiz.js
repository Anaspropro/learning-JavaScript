// JavaScript Promises

function getWeather(){
  return new Promise((resolve, reject) => {
    resolve('partly cloudy')
  })
}

function getWeatherIcon(weather){
  return new Promise((resolve, reject) => {
    setTimeout(() =>{
      switch(weather){
        case 'Sunny':
          resolve('sunny')
          break
        case 'Cloudy':
          resolve('cloudy')
          break
        case 'Rainy':
          resolve('rainy')
          break
        default:
          reject(`Can't find any icon!!!`)
      }
    }, 100)
  })
}


function onSucces(data){
    console.log(`Succes: ${data}`)
}
function onFail(error){
  console.log(`Error: ${error}`)
}
function onFinally(){
  console.log('finally we be done!!!')
}

getWeather()
  .then(getWeatherIcon)
  .then(onSucces)
  .catch(onFail)
  .finally(onFinally)


// Promise creator 

const myPromise = () =>{
  return new Promise((resolve, reject) => {
    setTimeout(() =>{
      resolve('What is my name?')
      reject('Hello!!!')
    }, 1000)
  })
}

const success = (data) =>{
  console.log(data)
}
const fail = (error) =>{
  console.log(error)
}
const final = () =>{
  console.log('finally we done here')
}

//Promise reciever

myPromise()
  .then(success)
  .catch(fail)
  .finally(final)