import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import AnimatedLetters from '../AnimatedLetters'

import Logo from './Logo'
import './index.scss'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = ['Y', 'a', 'n', 'g', ' ', 'M', 'i', 'a','o','m', 'i', 'a','o']
  const jobArray = [
    'w',
    'e',
    'b',
    ' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
  ]

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
          </h1>
          <h2>Front End Developer / JavaScript Expert</h2>
          
          <Link to="/assets/pdf/Miaomiao-Manes-CV.pdf" download className="flat-button">Download CV</Link>
          
          
        </div>
        <Logo />
      </div>


    </>
  )
}

export default Home
