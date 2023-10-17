import React from "react";
import { Link } from "react-scroll";
import styles from "./Header.module.css";
import phone from "../Assets/icons/phone.svg";
import facebook from "../Assets/icons/facebook.svg";
import insta from "../Assets/icons/instagram.svg";
import whatsapp from "../Assets/icons/whatsapp.svg";

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  function handleClick() {
    setIsOpen(!isOpen);
  }

  return (
    <section className={styles.headerBg}>
      <header className={styles.header}>
        <div
          className={`${styles.menu} ${isOpen && styles.menuActive}`}
          title="menu"
          onClick={handleClick}
        >
          <span className={styles.menuLine1}></span>
          <span className={styles.menuLine2}></span>
          <span className={styles.menuLine3}></span>
        </div>
        {!isOpen && (
          <div className={`${styles.info} animeHeader`}>
            <h1 className={styles.name}>Wilson</h1>
            <p className={styles.surname}>Salazar</p>
          </div>
        )}
        {!isOpen && (
          <ul className={`${styles.icons} animeHeader`}>
            <li className={styles.icon}>
              <a href="$" className={styles.phone}>
                <img src={phone} alt="numero"></img>
              </a>
            </li>
            <li className={styles.icon}>
              <a
                target="_blank"
                href="https://www.facebook.com/wilson.salazarlacamera"
                className={styles.facebook}
              >
                <img src={facebook} alt="facebook" target="blank"></img>
              </a>
            </li>
            <li className={styles.icon}>
              <a
                target="_blank"
                href="https://www.instagram.com/wilsondesalazar/"
                className={styles.instagram}
              >
                <img src={insta} alt="instagram"></img>
              </a>
            </li>
            <li className={styles.icon}>
              <a href="$" className={styles.whatsapp}>
                <img src={whatsapp} alt="whatsapp"></img>
              </a>
            </li>
          </ul>
        )}
      </header>
      <div
        className={`${styles.glass} ${
          isOpen && styles.glassActive
        } animeHeader`}
      ></div>
      {isOpen && (
        <nav className={`${styles.nav} animeHeader`}>
          <ul className={styles.navContainer}>
            <li className={styles.li}>
              <Link to="/" onClick={handleClick} className={styles.link}>
                Início
              </Link>
            </li>
            <li className={styles.li}>
              <Link
                to="sobre"
                onClick={handleClick}
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                className={styles.link}
              >
                Sobre
              </Link>
            </li>
            <li className={styles.li}>
              <Link
                to="galeria"
                onClick={handleClick}
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                className={styles.link}
              >
                Galeria
              </Link>
            </li>
            <li className={styles.li}>
              <Link
                to="contato"
                onClick={handleClick}
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
                className={styles.link}
              >
                Contacto
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </section>
  );
};

export default Header;
