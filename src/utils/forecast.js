const request = require('postman-request')

const forecast = (longitude, latitude, callback) => {
   const url = `http://api.weatherstack.com/current?access_key=<ENTER_YOUR_ACCESS_KEY>&query=${latitude},${longitude}&units=m`

   request({ url, json: true }, (error, response, body) => {
      if (error) {
         callback('Unable to connect to weather services!', undefined)
      } else if (body.error) {
         callback('Unable to find location', undefined)
      } else {
         let forecastRes = {
            loc_from_weather: {
               country: body.location.country,
            },
            summary: {
               desc: body.current.weather_descriptions[0],
               feelslike: body.current.feelslike,
               is_day: body.current.is_day,
               temperature: body.current.temperature,
            },
            details: {
               humidity: body.current.humidity,
               precipitation: body.current.precip,
               pressure: body.current.pressure,
               uv_index: body.current.uv_index,
               wind: {
                  wind_degree: body.current.wind_degree,
                  wind_dir: body.current.wind_dir,
                  wind_speed: body.current.wind_speed,
               }
            }
         }
         callback(undefined, forecastRes)
      }
   })
}

module.exports = forecast