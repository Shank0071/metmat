
export default function Poster() {
  return (
    <div className="max-w-5xl mx-auto mt-10 p-4">
        <h1 className="text-yellow-300 font-bold text-2xl text-center mb-5">Poster Presentation</h1>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
            <div className="bg-white/90 p-4 rounded-md">
                <h1 className="font-bold">Rules:</h1>
                <ul>
                    <li>1. Metallurgy related topic</li>
                    <li>2. The topic should be specific, innovative and advanced.</li>
                    <li>3. Size of the poster is Mandatory: width×height = 11.7×16.5 in inch and 297×420 in mm</li>
                    <li>4. Use standard app - Preferably canva</li>
                    <li>5. Send the poster to the mail: <span className="text-blue-600 underline hover:cursor-pointer">arunprakashsmda@gmail.com</span></li>
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
