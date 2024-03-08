import React, { useState, useEffect } from 'react' 
import axios from 'axios'
import Card from './Card'

const api_key = 'DEMO_KEY'
const URL = `http://api.nasa.gov/planetary/apod?api_key=${api_key}`

function App(){
const [apod, setApod] = useState()

  useEffect (() => {
    function fetchPhoto() {
      axios.get(URL)
      .then(res => {
        console.log(res.data)
        setApod(res.data)
      })
      .catch(err => {
        console.log(err.message)
      })
    }
    fetchPhoto()
    setApod({
      "date": "2024-03-08",
      "explanation": "The Tarantula Nebula, also known as 30 Doradus, is more than a thousand light-years in diameter, a giant star forming region within nearby satellite galaxy the Large Magellanic Cloud. About 180 thousand light-years away, it's the largest, most violent star forming region known in the whole Local Group of galaxies. The cosmic arachnid sprawls across this magnificent view, an assembly of image data from large space- and ground-based telescopes. Within the Tarantula (NGC 2070), intense radiation, stellar winds, and supernova shocks from the central young cluster of massive stars cataloged as R136 energize the nebular glow and shape the spidery filaments. Around the Tarantula are other star forming regions with young star clusters, filaments, and blown-out bubble-shaped clouds. In fact, the frame includes the site of the closest supernova in modern times, SN 1987A, at lower right. The rich field of view spans about 2 degrees or 4 full moons in the southern constellation Dorado. But were the Tarantula Nebula closer, say 1,500 light-years distant like the Milky Way's own star forming Orion Nebula, it would take up half the sky.",
      "hdurl": "https://apod.nasa.gov/apod/image/2403/Tarantula-HST-ESO-Webb-LL.jpg",
      "media_type": "image",
      "service_version": "v1",
      "title": "The Tarantula Zone",
      "url": "https://apod.nasa.gov/apod/image/2403/Tarantula-HST-ESO-Webb-SS1024.jpg"
    })
  }, [])

  if (!apod) return 'Fetchinf Photo of the Day...'
    return (
      <section>
       <Card
       title={apod.title}
       text={apod.explanation}
       imageURL={apod.url}
       date={apod.date}
     />
     </section>
    )
}

export default App