
import './App.css'
import Homepage from './pages/Homepage'
import Learn from './pages/Learn'
// import Extreme from './sections/Extreme'
// import HeroSec from './sections/HeroSec'
// import Info from './sections/Info'
// import Footer from './universal/Footer'
// import Navbar from './universal/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


function App() {
 

  return (
    <>
     

        <Router>

          <Routes>
                <Route path = '/'
                 element = {
                 <Homepage />
                              }

                              />

                 <Route path = '/learn'
                 element = {
                 <Learn />
                  }
                    />
          </Routes>

         


        </Router>





       

    </>
  )
}

export default App
