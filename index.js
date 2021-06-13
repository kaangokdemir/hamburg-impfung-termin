const axios = require('axios')
const player = require('play-sound')((opts = {}))

let time = 0

const main = async () => {
  const token = process.argv.find((arg) => arg.includes('token=')).split('=')[1]
  const plz = process.argv.find((arg) => arg.includes('plz=')) || 'plz=20357'

  const RES = await axios.get(
    'https://353-iz.impfterminservice.de/rest/suche/impfterminsuche?' + plz,
    {
      headers: {
        authorization: 'Basic ' + token,
      },
    }
  )
  time++
  console.log(time)

  if (RES.data.termine.length || RES.data.termineTSS.length) {
    console.log(
      '!!!!!!!!!!!!!!TERMIN FOUND!!!!!!!!!!!!!!!!!!!!!',
      RES.data.termine,
      RES.data.termineTSS
    )

    player.play('alarm.wav')
  }
}

setInterval(() => {
  main()
}, 1000)
