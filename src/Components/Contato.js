import React from 'react';
import Button from './Button';
import styles from './Contato.module.css';
import Input from './Input';
import Title from './Title'
import FbIcon from '../Assets/icons/facebook.svg'
import InstaIcon from '../Assets/icons/instagram.svg'
import EmailIcon from '../Assets/icons/email.svg'
import phone from '../Assets/icons/phone.svg';
import TextArea from './TextArea';
import AOS from 'aos';
import useMatch from './Hooks/useMatch';

const Contato = () => {

  const mobile = useMatch('(max-width: 58.25rem)');
  console.log(mobile);

  return (
    <section id='contato' className={styles.contato}>
      <div className={`${styles.container} ${mobile && styles.mobile}`} data-aos="fade-up">

      <div className={styles.info}>
        <div className={styles.title}>

          <Title title='Contacto'/>   
        </div>
        <ul className={styles.icons}>
          <li><a href="www"><img src={phone} alt="img"></img>848840128</a></li>
          <li><a href="www"><img src={FbIcon} alt="img"></img>wilsondesalazar</a></li>
          <li><a href="www"><img src={InstaIcon} alt="img"></img>wilsondesalazar</a></li>
          <li><a href="www"><img src={EmailIcon} alt="img"></img>wilson </a></li>
        </ul>
      </div>

      <div className={styles.msg}>
        <Input name='Nome' type='text'/>
        <Input name='Email' type='email'/>
        <TextArea name='mensagem' />
        <Button name='Enviar' />
      </div>
      </div>
    </section>
  )
}

export default Contato