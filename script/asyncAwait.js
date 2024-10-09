const getData = () =>{
  return new Promise((resolve, reject) => {
    setTimeout(() =>{
      resolve(46)
    }, 1)
  })
}

const start = async () =>{
  const result = await getData()
  console.log(result)
}

start()