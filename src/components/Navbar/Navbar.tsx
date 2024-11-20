import { useState } from 'react'
import styles from './Navbar.module.css'
import isotipoBlanco from '../../sprites/isotipo-blanco.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'

export default function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false)
  const navigate = useNavigate()



  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen)
  }

  return (
    <nav className={`navbar navbar-expand-lg navbar-light ${styles.navback}`}>
      <div className="container py-md-2 py-sm-1 px-4">
        <a className="navbar-brand">
          <img
            src={isotipoBlanco}
            className={`img-fluid ${styles.icon} `}
            alt="logosalmorejo"
          />
        </a>
        <button
          className={'navbar-toggler'}
          type="button"
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          <FontAwesomeIcon icon={faBars} className={styles.boldIcon} />
        </button>
      </div>
      <div
        className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''} justify-content-end`}
        id="navbarNav"
      >
        <ul className={`navbar-nav`}>
          <li className="nav-item px-4">
            <a className={`nav-link ${styles.boldText} `} href="/#Inicio">
              Inicio
            </a>
          </li>
          <li className="nav-item px-4">
            <a
              className={`nav-link ${styles.boldText} `}
              href="https://salmorejo.tech/2024/"
            >
              Otras ediciones
            </a>
          </li>
          <li className="nav-item px-4">
            <a
              className={`nav-link ${styles.boldText} `}
              href="https://www.uco.es/aulasoftwarelibre/"
            >
              Sobre nosotros
            </a>
          </li>
          <li className="nav-item px-4">
            <a className={`nav-link ${styles.boldText} `} href="#footer">
              Contacto
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
