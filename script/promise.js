function myPromise(){
  return new Promise((resolve, reject)=> {
    resolve('This is a promise!!!')
    reject("Error 404 not found")
  })
}

const success = (data) =>{
  document.getElementById('demo').innerHTML = data
}

const fail = (error) =>{
  document.getElementById('demo').innerHTML = error
}

const final = (final) =>{
  final = "We are done here..."
  document.getElementById('call').innerHTML = final
}

let promise = myPromise().then(success).catch(fail).finally(final)

console.log(promise)


function getWeather(){
  return new Promise((resolve, reject) => {
    let weather = 'Partly cloudy'
    setTimeout(() => {
      switch (weather){
        case 'Sunny': 
          resolve ('Sunny')
          break
        case 'Cloudy': 
          resolve('cloudy')
          break
        case 'Rainy':
          resolve('Rainy')
          break
        default:
          reject ("can't find the weather condition...")
      }
    }, 1000);
  })
}


getWeather().then(success).catch(fail).finally(final)