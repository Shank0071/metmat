
export default function Flashit() {
  return (
    <div className="max-w-5xl mx-auto mt-10 p-4">
    <h1 className="text-yellow-300 font-bold text-2xl text-center mb-5">Flash It (Non-Technical)</h1>
    <div className="flex flex-col md:flex-row gap-4 justify-center">
        <div className="bg-white/90 p-4 rounded-md">
            <h1 className="font-bold">Rules:</h1>
            <ul>
                <li><span className="font-bold">Round-1 (Ate the Brain) </span></li>
                    <li>General aptitude, Non verbal reasoning,logical thinking 
                        MCQ type Questions</li>
            </ul>
            <ul>
                <li><span className="font-bold">Round-2 (Generichap)</span></li>
                    <li>General knowledge, Metallurgy related historical questions</li>
            </ul>
            <ul>
                <li><span className="font-bold">Round-3 (Connect)</span></li>
                    <li>Picture representation related to important events related to Metallurgy  and general events.</li>
            </ul>
            <ul>
                <li>1. No negative marking</li>
                <li>2. Student must answer all the question in the mentioned 
                    particular time period for the MCQ type Questions.</li>
                <li>3. If any student marked as a malpractice they will immediately disqualified</li>
            </ul>
        </div>
        <div className="bg-white/90 p-4 rounded-md grid place-content-center">
            <h1 className="font-bold">Contact</h1>
            <p>Kavin</p>
            <p className="text-blue-600 underline hover:cursor-pointer">8870984287</p>
        </div>
    </div>
</div>
  )
}
