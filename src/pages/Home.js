import metmatLogo from "../images/metmatlogo.enc"
import { Link } from "react-router-dom"

export default function Home() {

  return (
    <div className="text-white max-w-4xl p-4 mx-auto grid">
      <div className="flex gap-10 items-center place-content-center m-4">
          <img className="w-44 mix-blend-screen" src={metmatLogo} alt="logo" />
        
        <h1 className="text-yellow-300 font-bold text-3xl">Metmat 23.0</h1>
      </div>
      <div className="max-w-2xl mx-auto flex flex-col gap-4 mb-10">
        <p>
          <span className="text-yellow-300 font-bold">METMAT 23.0</span> a national level technical symposium conducted by the department of <span className="text-yellow-300 font-bold">Metallurgical Engineering,
          Government College of Engineering, Salem.</span></p>
        <p>On this special occasion we are proud to announce that we are 
          celebrating our <span className="text-yellow-300 font-bold text">Golden Jubilee.</span></p>
        <p>METMAT 23.0 will be a great platform to explore our knowledge in the field of Metallurgy and gain oceans of wisdom. 
          It has both technical and non-technical events as a complete package.</p>
        <p>The METMAT 23.0 serves as a steel bridge for every metallurgist to mould ourself to become a sound casting. 
          This function will be conducted on 6th April 2023.</p>
        <p>On this wonderful occasion we are happy to invite students from various colleges to witness their own skills.
        </p>
        <p className="text-yellow-300 font-bold">Registration Fees: Rs. 350</p>
        <p className="text-yellow-300 font-bold">For Queries Contact: 8344765804 (Selvakumar)</p>

        <Link className="mx-auto" to="https://forms.gle/hCuMGKZDXzs19aSt8">
        <button className="bg-slate-300 text-black rounded-md p-2 px-4 w-fit hover:scale-110 hover:font-bold">Register Now!</button>
        </Link>
      </div>

      <div className="max-w-2xl text-center mx-auto bg-black/40 p-4 rounded-md">
        <h1>SPECIAL LECTURE ON</h1>
        <h1 className="font-bold text-yellow-300">TQM AND STANDARDS</h1>
        <h1>BY</h1>
        <h1 className="font-bold text-yellow-300">DR. V. S. SARAVANAN</h1>
        <h1>VICE PRESIDENT</h1>
        <h1>M/S INDOSHELL CAST [P] LTD, COIMBATORE.</h1>
        
      </div>
      
     
    </div>
  )
}
