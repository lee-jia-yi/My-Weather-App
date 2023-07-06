// console.log('Client side javascript file is loaded!')

const handleSearch = (location) => {
  fetch(`http://localhost:3000/weather?address=${location}`).then((response) => {
    response.json().then((data) => {
      if (data.error) {
        content.textContent = data.error
      } else {
        const { address, location, forecast } = data
        const { summary, details, loc_from_weather } = forecast;
        const { humidity, precipitation, pressure, uv_index, wind } = details;
        const { wind_degree, wind_dir, wind_speed } = wind
        const { desc, feelslike, is_day, temperature } = summary;
        const { country } = loc_from_weather

        document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + location + "')";

        document.querySelector("#location").innerText = country;
        document.querySelector('#address').innerText = address;
        document.querySelector("#temp").innerText = temperature;
        document.querySelector("#description").innerText = desc;
        document.querySelector("#humidity").innerText = humidity;
        document.querySelector("#wind").innerText = wind_speed;
      }
    })
      .finally(() => {
        document.querySelector('.weather').style.display = 'block';
        document.querySelector("#loading").style.display = 'none';
      })
  })
}

window.addEventListener('load', (e) => {
  document.querySelector('.weather').style.display = 'none';
  document.querySelector("#loading").style.display = 'block';
  handleSearch('Singapore');
});

const weatherForm = document.querySelector('form')
let search = document.querySelector('input')

weatherForm.addEventListener('submit', (e) => {
  e.preventDefault()
  document.querySelector("#loading").style.display = 'block'
  document.querySelector('.weather').style.display = 'none'

  handleSearch(search.value);
})

