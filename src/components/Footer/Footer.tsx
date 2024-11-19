import { useState, useEffect } from 'react'
import styles from './Footer.module.css'
import logo from '../../sprites/logoAula.png'
import facebook from '../../sprites/featherIcons/facebook.svg'
import github from '../../sprites/featherIcons/github.svg'
import youtube from '../../sprites/featherIcons/youtube.svg'
import instagram from '../../sprites/featherIcons/instagram.svg'
import telegram from '../../sprites/featherIcons/telegram.svg'
import linkedln from '../../sprites/featherIcons/linkedin.svg'
import mail from '../../sprites/featherIcons/mail.svg'
import map from '../../sprites/featherIcons/map.svg'

export default function Footer() {

    const [scroll, setScroll] = useState(0);
    
    useEffect(() => {
      let newScroll;
      if (window.innerWidth / window.innerHeight > 1) {
        newScroll = 450;
      } else if (window.innerWidth / window.innerHeight > 0.8) {
        newScroll = 200;
      } else if (window.innerWidth / window.innerHeight > 0.6) {
        newScroll = 80;
      } else if (window.innerWidth / window.innerHeight > 0.5) {
        newScroll = 250;
      } else {
        newScroll = 135;
      }
      setScroll(newScroll);
  
      const handleResize = () => {
        let updatedScroll;
        if (window.innerWidth / window.innerHeight > 1) {
          updatedScroll = 450;
        } else if (window.innerWidth / window.innerHeight > 0.8) {
          updatedScroll = 200;
        } else if (window.innerWidth / window.innerHeight > 0.6) {
          updatedScroll = 80;
        } else if (window.innerWidth / window.innerHeight > 0.5) {
          updatedScroll = 250;
        } else {
          updatedScroll = 135;
        }
        setScroll(updatedScroll);
      };

      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
  
    const [isMoved, setIsMoved] = useState(false);
  
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
  
      if (scrollPosition > scroll) {
        setIsMoved(true);
      } else {
        setIsMoved(false);
      }
    };
    
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, [scroll]); // Dependencia de `scroll` para que se actualice correctamente
  
  return (
    <div className={styles.fondo1} id="footer">
      <div className={`${styles.footerStr} row`}>
        <div
          className={`col-md-6 col-sm-12 pb-md-5 pb-sm-3 ${styles.movableDivLeft} ${isMoved ? styles.moved : ''}`}
        >
          <div className="row pt-2">
            <h2>Organiza:</h2>
          </div>
          <div className="row py-3">
            <div className="col-12">
              <img src={logo} className="img-fluid col-4 " />
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <a
                href="https://www.facebook.com/AulaSoftwareLibre/"
                target="_blank"
                style={{ padding: '2%' }}
              >
                <img
                  src={facebook}
                  alt="Facebook"
                  className={styles.icon}
                  style={{ width: '2em', height: '2em' }}
                />
              </a>
              <a
                href="https://www.instagram.com/aulasoftwarelibre/?hl=es"
                target="_blank"
                style={{ padding: '2%' }}
              >
                <img
                  src={instagram}
                  alt="Instagram"
                  style={{ width: '2em', height: '2em' }}
                />
              </a>
              <a
                href="https://t.me/AulaSoftwareLibreUCO"
                target="_blank"
                style={{ padding: '2%' }}
              >
                <img
                  src={telegram}
                  alt="Telegram"
                  style={{ width: '2em', height: '2em' }}
                />
              </a>
              <a
                href="https://www.linkedin.com/company/aulasoftwarelibre/"
                target="_blank"
                style={{ padding: '2%' }}
              >
                <img
                  src={linkedln}
                  alt="Linkedln"
                  style={{ width: '2em', height: '2em' }}
                />
              </a>
              <a
                href="https://twitter.com/AulaSL?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
                target="_blank"
                style={{ padding: '2%' }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  style={{ width: '2em', height: '2em' }}
                >
                  <path
                    fill="#ffffff"
                    d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"
                  />
                </svg>
              </a>
              <a
                href="https://github.com/aulasoftwarelibre"
                target="_blank"
                style={{ padding: '2%' }}
              >
                <img
                  src={github}
                  alt="GitHub"
                  style={{ width: '2em', height: '2em' }}
                />
              </a>
              <a
                href="https://www.youtube.com/channel/UCfWiR5j-cbKcGTi9faK8P6w"
                target="_blank"
                style={{ padding: '2%' }}
              >
                <img
                  src={youtube}
                  alt="GitHub"
                  style={{ width: '2em', height: '2em' }}
                />
              </a>
            </div>
          </div>
        </div>
        <div
          className={`col-md-6 col-sm-12 py-5 d-flex flex-column align-items-center justify-content-center ${styles.movableDivRight} ${isMoved ? styles.movedLeft : ''}`}
        >
          <div className="row">
            <div className="col-11">
              <h3>¡Encuéntranos!</h3>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-1">
              <img
                src={mail}
                alt="Mail"
                style={{ width: '2em', height: '2em' }}
              />
            </div>
            <div className="col">
              <h3>
                <a style={{ textDecoration: 'none', color: '#ffffff' }}>
                  aulasoftwarelibre@uco.es
                </a>
              </h3>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <h3>
                {' '}
                <img src={map} alt="Map" style={{ width: '1em' }} /> Aulario
                Averroes
              </h3>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <h3> (Campus de Rabanales)</h3>
            </div>
          </div>
        </div>
      </div>
      <div className={`row pb-3`}>
        <h4>© 2024 Aula Software Libre</h4>
      </div>
    </div>
  )
}
