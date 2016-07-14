import Client from './components/Client'

var WeatherClient = new Client();



function Location(e) {

  if(e.type == 'keyup' && e.keyCode != 13){
    return false;
  }

  WeatherClient.getCurrentWeather(document.getElementById('city').value).then(function (response) {

    if(document.getElementById('city').value ==0){
      alert("Insert the name of the city!");
    }

    var html = '';

  
    var celsiusDegrees;
    celsiusDegrees=(response.data.main.temp - 273.15).toPrecision(2);
    

    html += '\n' + document.getElementById('city').value + '\n';
    html += "\n \n Cloudiness: " +  response.data.weather[0].description + '.\n' ;
    html += "Temperature: " + celsiusDegrees +  ' ℃. \n';
    html += "Humidity: " + response.data.main.humidity  + '%. \n';
    html += "Wind speed: " + response.data.wind.speed + ' mph. \n';

    document.getElementById('image').setAttribute('src', 'img/' + response.data.weather[0].icon + '.svg') ;
    document.getElementById("vreme").innerText = html;



    //document.getElementById('search_input').classList.toggle('hidden');
    document.getElementById('result_container').classList.remove('hidden');
    document.getElementById('result_container2').classList.add('hidden');


    console.log(response.data)

  }).catch(function (err) {
    console.warn(err)
  })
}
  function Forecast(e){
    WeatherClient.getForecastWeather(document.getElementById('city').value).then(function (response) {
      console.log(response);

      var html= '';
      var i;
      var a = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
      var date = new Date();
      var day = date.getDay();

      a = a.concat(a.splice(0, day))
      for(i = 0; i<=6; i++){



        html += '<br/> The weather on ' +  a[i];
        html += "<br/>  Cloudiness: " +  response.data.list[i].weather[0].description + '.<br/>' ;
        html += "Temperature: " + (response.data.list[i].temp.day - 273.15).toPrecision(2) +  ' ℃. <br/>';
        html += "Humidity: " + response.data.list[i].humidity  + '%. <br/>';
        html += "Wind speed: " + response.data.list[i].speed + ' mph. <br/>';
        html += '<img src="img/' + response.data.list[i].weather[0].icon + '.svg" />'+  '<br>';

      }

      
      document.getElementById('vremea').innerHTML = html;

      document.getElementById('result_container2').classList.remove('hidden');
      

    }).catch(function (err) {
      console.warn(err)
    })
    
  }


document.getElementById("myBtn").addEventListener("click", Location);
document.getElementById('city').addEventListener('keyup', Location);
document.writeln('');
document.getElementById('current_date').innerHTML = new Date();
document.writeln('');

document.getElementById("myBtn2").addEventListener("click", Forecast);


