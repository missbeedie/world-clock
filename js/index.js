function updateTime() {
  //Los Angeles
let losAngelesElement = document.querySelector('#losAngeles')
let losAngelesDateElement = losAngelesElement.querySelector('.date')
let losAngelesTimeElement = losAngelesElement.querySelector('.time')
let losAngelesCurrentTime = moment().tz('America/Los_Angeles')


losAngelesDateElement.innerHTML = losAngelesCurrentTime.format('dddd, Do MMMM YYYY')
losAngelesTimeElement.innerHTML = losAngelesCurrentTime.format('HH:mm:ss')

//Paris
let parisElement = document.querySelector('#paris')
let parisDateElement = parisElement.querySelector('.date')
let parisTimeElement = parisElement.querySelector('.time')
let parisCurrentTime = moment().tz('Europe/Paris')

parisDateElement.innerHTML = parisCurrentTime.format('dddd, Do MMMM YYYY')
parisTimeElement.innerHTML = parisCurrentTime.format('HH:mm:ss')

//Lagos
let lagosElement = document.querySelector('#lagos')
let lagosDateElement = lagosElement.querySelector('.date')
let lagosTimeElement = lagosElement.querySelector('.time')
let lagosCurrentTime = moment().tz('Africa/Nigeria')

lagosDateElement.innerHTML = lagosCurrentTime.format('dddd, Do MMMM YYYY')
lagosTimeElement.innerHTML = lagosCurrentTime.format('HH:mm:ss')
}

function updateCity(event){
  let cityTimeZone = event.target.value
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess()
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1]
  let cityTime = moment().tz(cityTimeZone)
  let citiesElement = document.querySelector('#cities')
  citiesElement.innerHTML = `
  <div class="city">
      <div>
      <h2>${cityName}</h2>
      <div class="date">${cityTime.format('dddd, Do MMMM YYYY')}</div>
      </div>
      <div class="time">${cityTime.format('HH:mm:ss')}</div>
    </div> 
  `;
}

updateTime()
setInterval(updateTime, 1000)



let citiesSelectElement = document.querySelector('#city')
citiesSelectElement.addEventListener('change', updateCity)
