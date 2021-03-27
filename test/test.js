const date = new Date()

const dateDisplayed = date.toLocaleString('fr-FR')

const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second : 'numeric'}

const dateDisplayedLong = date.toLocaleString('fr-FR', options)

console.log(dateDisplayed)

console.log(dateDisplayedLong)