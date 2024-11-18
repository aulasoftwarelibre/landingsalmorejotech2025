import styles from './Header.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar } from '@fortawesome/free-solid-svg-icons'
import logo from '../../sprites/logo.svg'
import trigo from '../../sprites/trigo.svg'
import penguin from '../../sprites/penguin.svg'
import ajo from '../../sprites/ajo.svg'
import tomato from '../../sprites/tomato.svg'
import wifi from '../../sprites/wifi.svg'
import { useEffect, useState } from 'react'

export default function Header() {


  const [isMoved, setIsMoved] = useState(false)
  const [isMovedTomato, setIsMovedTomato] = useState(false)
  const [isMovedText, setIsMovedText] = useState(false)
  const [isMovedWifi, setIsMovedWifi] = useState(false)
  const [isMovedPingu, setIsMovedPingu] = useState(false)
  const [isMovedWheat, setIsMovedWheat] = useState(false)

  let scroll: number
  let TextScroll: number
  let TopScroll: number //Scroll Especifico para Tablet

  if (window.innerWidth/window.innerHeight> 1 ) {
    scroll = 400
    TextScroll=400
    TopScroll= 425

  }  
  else if (window.innerWidth/window.innerHeight> 0.8 ) {
    scroll = 150
    TextScroll=100
    TopScroll= 100
  }  
  else if (window.innerWidth/window.innerHeight> 0.6 ) {
    scroll = 50
    TextScroll=75
    TopScroll= 75
  }  
  else if(window.innerWidth/window.innerHeight> 0.5 ) {
    scroll = 200
    TextScroll=150
    TopScroll= 175
  }
  else{
  scroll = 85
  TextScroll=60
  TopScroll= 60
  }


  const handleWheatScroll = () => {
    const scrollPosition = window.scrollY

    if (scrollPosition > scroll) {
      setIsMovedWheat(true)
    } else {
      setIsMovedWheat(false)
    }
  }

  const handlePinguScroll = () => {
    const scrollPosition = window.scrollY

    if (scrollPosition > scroll) {
      setIsMovedPingu(true)
    } else {
      setIsMovedPingu(false)
    }
  }

  const handleWifiScroll = () => {
    const scrollPosition = window.scrollY

    if (scrollPosition > TopScroll) {
      setIsMovedWifi(true)
    } else {
      setIsMovedWifi(false)
    }
  }

  const handleTextScroll = () => {
    const scrollPosition = window.scrollY

    if (scrollPosition > TextScroll) {
      setIsMovedText(true)
    } else {
      setIsMovedText(false)
    }
  }

  const handleScroll = () => {
    const scrollPosition = window.scrollY

    if (scrollPosition > scroll) {
      setIsMoved(true)
    } else {
      setIsMoved(false)
    }
  }

  const handleTomatoScroll = () => {
    const scrollPosition = window.scrollY

    if (scrollPosition > TopScroll) {
      setIsMovedTomato(true)
    } else {
      setIsMovedTomato(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('scroll', handleTomatoScroll)
    window.addEventListener('scroll', handleTextScroll)
    window.addEventListener('scroll', handleWifiScroll)
    window.addEventListener('scroll', handlePinguScroll)
    window.addEventListener('scroll', handleWheatScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('scroll', handleTomatoScroll)
      window.removeEventListener('scroll', handleTextScroll)
      window.removeEventListener('scroll', handleWifiScroll)
      window.removeEventListener('scroll', handlePinguScroll)
      window.removeEventListener('scroll', handleWheatScroll)
    }
  }, [])

  return (
    <>
      <div className={`${styles.headerContainer}`}>
        <div className="row">
          <div className="col-4">
            <div className={`${styles.tomato}`}>
              <img
                src={tomato}
                className={`${styles.tomato} ${isMovedTomato ? styles.moved3dtomato : ''}`}
                alt="tomato"
              />
            </div>
          </div>
          <div className="col-4"></div>
          <div className="col-sm-3 col-2">
            <div
              className={`${styles.wifi} ${isMovedWifi ? styles.movedWifi : ''}`}
            >
              <img
                src={wifi}
                className={`${styles.wifi} d-md-inline d-none`}
                alt="wifi"
              />
              <img
                src={penguin}
                className={`${styles.penguintop} d-md-none d-inline`}
                alt="penguin"
              />
            </div>
          </div>
        </div>
        
        <div
          className={`pt-4 ${styles.normalText} ${isMovedText ? styles.movedText : ''}`}
        >
        <div className={styles.logoContainer}>
          <img src={logo} className={`${styles.logo} img-fluid`} alt="logo" />
        </div>
          <p className={`${styles.logoContainer}`}>
            <FontAwesomeIcon
              icon={faCalendar}
              className={`${styles.calendar}`}
            />
            9 DE MAYO
          </p>

          <div className="row">
            <div className="col-xxl-1 col-md-2 col-1"></div>
            <div className="col-xxl-10 col-md-8 col-10">
              <p className={`${styles.logoContainer}`}>
                VUELVE CON MÁS FUERZA QUE NUNCA EL GRAN EVENTO TECNOLÓGICO
                CORDOBÉS
              </p>
            </div>
          </div>
        </div>
        <div className="pt-4">
          <p className={`${styles.logoContainer}`}>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSdVcJHUDOA0P6HsfWzXMbUmq7XWP6LbSqAs2cFT8zMt_y6pWA/viewform?usp=sf_link">
            <button className={`${styles.buttonInicio}`}>
              Call4Papers
            </button>
            </a>
          </p>
        </div>
        <div className={`row ${styles.logos}`}>
          <div className="col-3">
            <div className={`${styles.trigo}`}>
              <img
                src={trigo}
                className={`${styles.trigo} ${isMovedWheat ? styles.movedWheat : ''}`}
                alt="trigo"
              />
            </div>
          </div>
          <div className="col-3">
            <div className={`${styles.penguin}`}>
              <img
                src={penguin}
                className={`${styles.penguin} ${isMovedPingu ? styles.movedPingu : ''} d-none d-md-block`}
                alt="penguin"
              />
            </div>
          </div>
          <div className="col-3"></div>
          <div className="col-sm-3 col-2">
            <div
              className={`${styles.ajo} ${isMoved ? styles.movedRight : ''}`}
            >
              <img src={ajo} className={`${styles.ajo}`} alt="ajo" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
