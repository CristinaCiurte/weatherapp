import Client from './components/Client'

var WeatherClient = new Client();

WeatherClient.getCurrentWeather('Sibiu').then(function(response){
  console.log(response)
}).catch(function(err) {
  console.warn(err)
})