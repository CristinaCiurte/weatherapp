import axios from 'axios'

const Client = () => {

  var
    base_url = 'http://api.openweathermap.org/data/2.5/',
    api_key = 'b08540e9336bc45708303709709c330f'



  async function getCurrentWeather(location) {
    return await call(
      auth(base_url + 'weather?q=' + location)
    )
  }
  
  async function getForecastWeather(location) {
    return await call(
        auth(base_url + 'forecast/daily?q=' + location + '&cnt=7')
    )
    
  }


  function auth(url) {
    return url + '&APPID=' + api_key
  }

  async function call(url) {
    return await axios.get(url)
  }

  return {
    getCurrentWeather: getCurrentWeather,
    getForecastWeather: getForecastWeather
  }

 
}

export default Client;