import React from "react";
import styles from "./Galeria.module.css";
import photo_1 from "../Assets/img/GS1_0318.jpg";
import photo_2 from "../Assets/img/GS1_1858.jpg";
import photo_3 from "../Assets/img/GS1_0608.jpg";
import photo_4 from "../Assets/img/GS1_7938.jpg";
import photo_5 from "../Assets/img/GS1_7366.jpg";
import photo_6 from "../Assets/img/GS1_1858.jpg";
// import photo_7 from '../Assets/img/teste.jpg'
import Title from "./Title";
import AOS from "aos";
import useMatch from "./Hooks/useMatch";

const Galeria = () => {
  const mobile = useMatch("(max-width: 47.5rem)");

  React.useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <section data-aos="fade-up" id="galeria" className={styles.portfolio}>
      <div className={styles.title}>
        <Title title="Galeria" />
      </div>
      <div className={`${styles.photos} ${mobile && styles.mobile}`}>
        <img
          className={styles.img_1}
          src={photo_1}
          alt="wilson salazar foto"
          data-aos="fade-up"
        ></img>

        <img
          className={styles.img_4}
          src={photo_4}
          alt="wilson salazar foto"
          data-aos="fade-up"
        ></img>
        <img
          className={styles.img_3}
          src={photo_3}
          alt="wilson salazar foto"
          data-aos="fade-up"
        ></img>
        <img
          className={styles.img_2}
          src={photo_2}
          alt="wilson salazar foto"
          data-aos="fade-up"
        ></img>
        <img
          className={styles.img_5}
          src={photo_5}
          alt="wilson salazar foto"
          data-aos="fade-up"
        ></img>
        <img
          className={styles.img_6}
          src={photo_6}
          alt="wilson salazar foto"
          data-aos="fade-up"
        ></img>
        {/* <img className={styles.img_7} src={photo_7} alt="wilson salazar foto" data-aos="fade-up"></img> */}
      </div>
    </section>
  );
};

export default Galeria;
