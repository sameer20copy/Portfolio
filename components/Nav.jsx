//Nav.jsx
import { Link } from "react-router-dom";
import {useNavigate} from "react-router-dom";
export default function Nav(){

    const navigate=useNavigate();
    
    const contact=()=>{
        navigate("/contact")
    }
    return(
        <nav className="flex justify-around p-5 text-[#282829] font-semibold bg-[#e5e7e6] w-screen h-full">
            {/* <p id="name" className="ml-5  text-3xl flex"><p className="text-[#7d2ae8]">S</p>am.</p> */}
            <img src="../logo1.png" className="mt-2 hover:underline hover:scale-[1.03] transition-all h-10 scale-[3.5]"></img>
            <Link className="mt-2 hover:underline hover:scale-[1.03] transition-all" to="/">Home</Link>
            <Link className="mt-2 hover:underline hover:scale-[1.03] transition-all" to="/about">About</Link>
            <Link className="mt-2 hover:underline hover:scale-[1.03] transition-all" to="/service">Service</Link>
            <Link className="mt-2 hover:underline hover:scale-[1.03] transition-all" to="/contact">Contact</Link>
            <button className="hover:scale-[1.03] active:scale-90 transition-all hover:cursor-pointer bg-[#7d2ae8] text-white px-3 rounded-xl" onClick={contact}>Let's Talk</button>
        </nav>
    )
}