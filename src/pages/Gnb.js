

export default function Gnb() {
  return (
    <div className="max-w-5xl mx-auto mt-5 p-4">
    <h1 className="text-yellow-300 font-bold text-2xl text-center mb-5">Grain Ñ Brain (Metallography)</h1>
    <div className="flex flex-col gap-4 justify-center md:flex-row">
        <div className="bg-white/90 p-4 rounded-md">
            <h1 className="font-bold">Rules:</h1>
            <ul>
                <li>1. First Round - Written test (metallography related questions)</li>
                <li>2. Second Round - Metallography Procedure</li>
            </ul>
        </div>
        <div className="bg-white/90 p-4 rounded-md grid place-content-center">
            <h1 className="font-bold">Contact</h1>
            <p>Sujeeth</p>
            <p className="text-blue-600 underline hover:cursor-pointer">7904838475</p>
        </div>
    </div>
</div>
  )
}
