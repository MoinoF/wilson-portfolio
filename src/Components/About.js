import React from 'react';
import styles from './About.module.css';
import Title from './Title';
import AOS from 'aos'

const About = () => {

  React.useEffect(() => {
    AOS.init({duration: 2000})
  }, [])
  
  return (
    <section id='sobre' className={styles.about}>
        <div className={styles.info} data-aos="fade-up">
          <Title title='Sobre' />
          <p className={styles.paragraph}>Ola! Eu sou <b> Wilson Salazar. </b>Eu sou um fotógrafo profissional com <b>10 anos de experiência </b>que     trabalha com fotógrafias de estudio, externas e eventos.
            A minha missão é captura e preservação de memórias, emoções e experiências.
            Alguns interesses pessoais como, andar de moto, design gráfico, socializar, marketing digital, videogames etc.</p>
        </div>
    </section>
  )
}

export default About