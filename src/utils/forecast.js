const request = require('request')

const forecast = (latitude, longitude, callback) => {
  const url = `https://api.darksky.net/forecast/2c8c1e6560770f3ee472a7dbc4f5b2cb/${latitude},${longitude}?units=si`

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback('Unable to connect to weather service!', undefined)
    } else if (body.error) {
      callback('Unable to find location', undefined)
    } else {
      callback(undefined, `${body.daily.data[0].summary} It is currently ${body.currently.temperature} degrees out. There is a ${body.currently.precipProbability}% chance of rain.`)
    }
  })

}





module.exports = forecast

// const url = 'https://api.darksky.net/forecast/2c8c1e6560770f3ee472a7dbc4f5b2cb/37.8267,-122.4233?units=si'

// request({ url: url, json: true }, (error, response) => {


//   if (error) {
//     console.log(chalk.red('Unable to connect to weather service!'))
//   } else if (response.body.error) {
//     console.log(chalk.red('Unable to find location'))
//   } else {
//     const temperature = response.body.currently.temperature
//     const precipProbability = response.body.currently.precipProbability

//     console.log(`${response.body.daily.data[0].summary} It is currently ${temperature} degrees out. There is a ${precipProbability}% chance of rain.`)
//   }
//   // console.log(response.body.currently)
// })


// Goal: Create a reusable function for getting the forecast
//
// 1. Setup the "forecast" function in utils/forecast.js
// 2. Require the function in app.js and call it as shown below
// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)