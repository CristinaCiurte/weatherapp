import axios from 'axios'

const Client = () => {

  var
    base_url = 'http://api.openweathermap.org/data/2.5/weather/',
    api_key = 'b08540e9336bc45708303709709c330f'

  async function getCurrentWeather(location) {
    return await call(
      auth(base_url + '?q=' + location)
    )
  }

  function auth(url) {
    return url + '&APPID=' + api_key
  }

  async function call(url) {
    return await axios.get(url)
  }

  return {
    getCurrentWeather: getCurrentWeather
  }
}

export default Client;