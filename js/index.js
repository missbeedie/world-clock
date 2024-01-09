function updateTime() {
  //Los Angeles
let losAngelesElement = document.querySelector('#losAngeles')
let losAngelesDateElement = losAngelesElement.querySelector('.date')
let losAngelesTimeElement = losAngelesElement.querySelector('.time')
let losAngelesCurrentTime = moment().tz('America/Los_Angeles')


losAngelesDateElement.innerHTML = losAngelesCurrentTime.format('dddd Do MMMM YYYY')
losAngelesTimeElement.innerHTML = losAngelesCurrentTime.format('HH:mm:ss')

//Paris
let parisElement = document.querySelector('#paris')
let parisDateElement = parisElement.querySelector('.date')
let parisTimeElement = parisElement.querySelector('.time')
let parisCurrentTime = moment().tz('Europe/Paris')

parisDateElement.innerHTML = parisCurrentTime.format('dddd Do MMMM YYYY')
parisTimeElement.innerHTML = parisCurrentTime.format('HH:mm:ss')

}

updateTime()
setInterval(updateTime, 1000)