

export default function Clickzz() {
    return (
      <div className="max-w-5xl mx-auto p-4 mt-10">
      <h1 className="text-yellow-300 font-bold text-2xl text-center mb-5">Clickzz (Photography)</h1>
      <div className="flex flex-col md:flex-row gap-4 justify-center">
          <div className="bg-white/90 p-4 rounded-md">
              <h1 className="font-bold">Rules:</h1>
              <ul>
                  <li>1. Theme can be anything</li>
                  <li>2. Photo should be taken within the campus</li>
                  <li>3. No editing</li>
                  <li>4. Send the photo to the mail: <span className="text-blue-600 underline hover:cursor-pointer">metmat2k23@gmail.com</span> <span className="font-bold">Format: jpg</span></li>
                  <li>5. Send <span className="font-bold">Name, Year, Device name, Quote (related to pic)</span> with the photo</li>
                  <li>5.Last date: 31.03.2023</li>
                  <li className="font-bold">Results are based on creativity....</li>
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
  