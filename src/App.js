import './App.css';
import About from './Components/About';
import Contato from './Components/Contato';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Galeria from './Components/Galeria';
import 'aos/dist/aos.css'

function App() {
  return (
    <>
      <Header />
        <About />
        <Galeria />
        <Contato />
      <Footer />
    </>
  )
}

export default App;
