import Extreme from "../sections/Extreme"
import HeroSec from "../sections/HeroSec"
import Info from "../sections/Info"
import Footer from "../universal/Footer"
import Navbar from "../universal/Navbar"



export default function Homepage() {
  return (
    <div>
      <Navbar />
      <HeroSec />
      <Extreme />
      <Info />
      <Footer />
    </div>
  )
}
