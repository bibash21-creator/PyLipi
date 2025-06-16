
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
        <nav className="flex flex-row sm:p-2 md:p-7 gap-x-2 md:gap-x-3 h-[10vh] md:h-[20vh]">
        
    <div className="border border-green-500 w-[30%] ">
      </div>
    <div className="border border-green-500 w-[70%]">
           <Link to="/">Home</Link>
           <Link to="/learn">Learn</Link>


    </div>
        </nav>
    </div>
  )
}
