import { useState } from "react";
import Select from "react-select";
import { db } from "../firebase/config";
import { Link } from "react-router-dom";

const categoriesTech = [
  { value: "metallography", label: "Metallography" },
  { value: "metaquest", label: "Meta Quest" },
  { value: "foundry", label: "Foundry" },
  { value: "metquiz", label: "Mett Quiz" },
];

const categoriesNonTech = [
  { value: "photography", label: "Photography" },
  { value: "adzap", label: "Adzap" },
  { value: "rubics", label: "Rubics" },
  { value: "gamer zone", label: "Gamer Zone" },
];

export default function Registration() {
    const [name, setName] = useState("");
    const [college, setCollege] = useState(""); 
    const [department, setDepartment] = useState(""); 
    const [selectedTechEvents, setSelectedTechEvents] = useState([]);
    const [selectedNonTechEvents, setSelectedNonTechEvents] = useState([]);
    const [success, setSuccess] = useState("")

    const handleSubmit = async (e) => {
    e.preventDefault();
    let ste = []
    let snte = []

    for(let i=0; i<selectedTechEvents.length; i++) {
        ste.push(selectedTechEvents[i].label)
    }

    for(let i=0; i<selectedNonTechEvents.length; i++) {
        snte.push(selectedNonTechEvents[i].label)
    }

    const user = { name, college, department, selectedTechEvents: ste, selectedNonTechEvents: snte }
    try {
        await db.collection("users").add(user)
        setName("")
        setDepartment("")
        setCollege("")
        setSelectedNonTechEvents([])
        setSelectedTechEvents([])
        setSuccess("Registered Successfully")
        setTimeout(() => {setSuccess("")}, 3000)
        
        
    } catch(err) {
        console.log(err)
        setSuccess("An Error Occurred")
    }
    console.log(selectedTechEvents);
    console.log(selectedNonTechEvents);
  }

  return (
    <div onSubmit={handleSubmit} className="max-w-sm mt-1 mx-auto flex flex-col gap-5">
      <h1 className="font-bold text-3xl text-center text-yellow-300">Register</h1>
      <form className="bg-white/75 p-4 flex flex-col gap-2 rounded-md shadow-md text-black font-bold">
        <label className="flex flex-col gap-1">
          <span>Name:</span>
          <input
            type="text"
            className="rounded-md p-1 border border-slate-300 outline-none"
            onChange={(e) => setName(e.target.value)}
            value={name}
            required
          />
        </label>
        <label className="flex flex-col gap-1">
          <span>College:</span>
          <input
            type="text"
            className="rounded-md p-1 border border-slate-300 outline-none"
            onChange={(e) => setCollege(e.target.value)}
            value={college}
            required
          />
        </label>
        <label className="flex flex-col gap-1">
          <span>Department:</span>
          <input
            type="text"
            className="rounded-md p-1 border border-slate-300 outline-none"
            onChange={(e) => setDepartment(e.target.value)}
            value={department}
            required
          />
        </label>
        <label className="flex flex-col gap-1">
          <span>Technical Events:</span>
          <Select
            name="tech"
            required
            onChange={(option) => setSelectedTechEvents(option)}
            value={selectedTechEvents}
            options={categoriesTech}
            isMulti
          />
        </label>
        <label className="flex flex-col gap-1">
          <span>Non-Technical Events:</span>
          <Select
            name="non-tech"
            required
            onChange={(option) => setSelectedNonTechEvents(option)}
            value={selectedNonTechEvents}
            options={categoriesNonTech}
            isMulti
          />
        </label>
        <button className="bg-yellow-400 text-black rounded-md p-1 w-1/4 mx-auto mt-2">Submit</button>
        {success && <p className="text-green-500">{success}</p>}
        {success === "An Error Occurred" ? (<p className="text-red-500">{success}</p>):(<p></p>)}
        <Link to="https://forms.gle/hCuMGKZDXzs19aSt8">Register</Link>
      </form>
      
      {/* https://docs.google.com/forms/d/e/1FAIpQLSdGgDDbjUjRvYDG2FAA0C-eU9YVogYW97DIIV0FGnZOXuFpjQ/viewform?usp=sf_link */}
    </div>
  );
}
