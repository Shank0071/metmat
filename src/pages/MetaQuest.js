

export default function MetaQuest() {
  return (
    <div className="max-w-5xl mx-auto p-4 mt-10">
    <h1 className="text-yellow-300 font-bold text-2xl text-center mb-5">Meta Quest (Technical Event)</h1>
    <div className="flex flex-col md:flex-row gap-4 justify-center">
        <div className="bg-white/90 p-4 rounded-md">
            <h1 className="font-bold">Rules:</h1>
            <ul>
                <li><span className="font-bold">Round-1 </span></li>
                    <li>First half: Metallurgy releated question like physical metallurgy, 
                    phase transformation, heat treatment, foundry and forging, mechanical behavior</li>
            </ul>
            <ul>
                <li><span className="font-bold">Round-2</span></li>
                    <li>1. Question are asked about the metallurgical laboratory that are also as MCQ</li>
                    <li>2. Mobile phone and electronic devices are completely prohibited </li>
                    <li>3. No negative marking </li>
                    <li>4. Student must answer all the question at the mention particular time period </li>
                    <li>5. If any student marked as a malpractice they will immediately disqualified</li>
            </ul>
        </div>
        <div className="bg-white/90 p-4 rounded-md grid place-content-center">
            <h1 className="font-bold">Contact</h1>
            <p>Arun Prakash</p>
            <p className="text-blue-600 underline hover:cursor-pointer">9487965300</p>
        </div>
    </div>
</div>
  )
}
