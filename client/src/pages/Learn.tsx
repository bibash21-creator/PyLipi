
import Mainsec from "../sections/Mainsec";
import Sidesec from "../sections/Sidesec";
import Footer from "../universal/Footer";
import Navbar from "../universal/Navbar";

export default function Learn() {
  return (
    <div>
      <Navbar/>

      <section className="flex gap-x-3 px-7 mb-10">
        <Sidesec />

        <Mainsec />
      </section>

      <Footer />
      

      

    </div>
  )
}
