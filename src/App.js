import Navbar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import Skills from './Components/Skills'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import Work from './Components/Work'

// import "../node_modules/bootstrap/dist/css/bootstrap.min.css"


// import {BrowserRouter,Route,Switch} from 'react-router-dom'
function App() {
  return (
    <>
    
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Work/>
      <Contact/>
      <Footer/>

    </>
  );
}

export default App;
