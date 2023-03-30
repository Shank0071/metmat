import { Link } from "react-router-dom";

export default function Events() {
  return (
    <div className="flex gap-4 justify-center mt-16 p-2 max-w-3xl mx-auto flex-wrap">
      <Link
        to="/events/poster"
        className="bg-white/90 p-4 rounded-md hover:scale-110"
      >
        <h1 className="font-bold hover:text-blue-600 text-center">Poster</h1>
      </Link>
      <Link
        to="/events/ppt"
        className="bg-white/90 p-4 rounded-md hover:scale-110"
      >
        <h1 className="font-bold hover:text-blue-600 text-center">
          Paper Presentation
        </h1>
      </Link>
      <Link
        to="/events/gnb"
        className="bg-white/90 p-4 rounded-md hover:scale-110"
      >
        <h1 className="font-bold hover:text-blue-600 text-center">
          Grain Ñ Brain
        </h1>
      </Link>
      <Link
        to="/events/clickzz"
        className="bg-white/90 p-4 rounded-md hover:scale-110"
      >
        <h1 className="font-bold hover:text-blue-600 text-center">Clickzz</h1>
      </Link>
      <Link
        to="/events/mq"
        className="bg-white/90 p-4 rounded-md hover:scale-110"
      >
        <h1 className="font-bold hover:text-blue-600 text-center">
          Meta Quest
        </h1>
      </Link>
      <Link
        to="/events/jj"
        className="bg-white/90 p-4 rounded-md hover:scale-110"
      >
        <h1 className="font-bold hover:text-blue-600 text-center">
          Jovial Joust
        </h1>
      </Link>
      <Link
        to="/events/flashit"
        className="bg-white/90 p-4 rounded-md hover:scale-110"
      >
        <h1 className="font-bold hover:text-blue-600 text-center">Flash it</h1>
      </Link>
    </div>
  );
}
