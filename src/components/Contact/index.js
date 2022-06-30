import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')


  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])



  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <h2>
            I am currently looking for a frontend developer position and I am
            interested in a junior frontend developer offer. My core skills are
            React, Express and Mongo.
          </h2>
        
        </div>
        <div className="info-map">
          Miaomiao Yang
          <br />
          Chartres, 28000 <br />
          France
          <br />
          <span>yangmiaomiao1223@gmail.com</span>
        </div>
        <div className="map-wrap">
          <MapContainer center={[48.447631, 1.488387]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[48.447631, 1.488387]}>
              <Popup>I live here, come over for a cup of coffee :)</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact
