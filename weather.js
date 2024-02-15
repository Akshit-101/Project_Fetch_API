function getData() {
  const date = new Date();

  const cdate = date.toDateString();

  const gethead = document.getElementById('header');
  const loc = document.getElementById('location');

  const current = document.getElementById('current');

  fetch(
    'https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=03de0b161f867b465c06298b12d50f6f'
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok!');
      }
      return response.json();
    })
    .then((data) => {
      if (!data || !data.main || !data.weather) {
        throw new Error('Invalid data received from the API :(');
      }

      const loca = document.createElement('div');
      loca.classList.add('city');
      loca.textContent = `${data.name}, ${data.sys.country}`;

      const tarik = document.createElement('div');
      tarik.classList.add('date');
      tarik.textContent = cdate;

      const temp = document.createElement('div');
      temp.classList.add('temp');
      temp.textContent = `${data.main.temp}°c`;

      const weather = document.createElement('div');
      weather.classList.add('weather');
      weather.textContent = data.weather[0].main;

      const tempupdate = document.createElement('div');
      tempupdate.classList.add('hi-low');
      tempupdate.textContent = `${data.main.temp_max}°c / ${data.main.temp_min}°c`;

      loc.appendChild(loca);
      loc.appendChild(tarik);

      current.appendChild(temp);
      current.appendChild(weather);
      current.appendChild(tempupdate);
    })
    .catch((error) => {
      console.error('Error fetching weather data:', error);
    });
}

getData();
