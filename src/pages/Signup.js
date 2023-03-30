import { useState } from "react";
import { useSignup } from "../hooks/useSignup";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signup, IsPending, error } = useSignup();

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(email, password, name);
    setName("");
    
  };
  return (
    <div className="max-w-sm mx-auto">
      <h1 className="text-center mt-7 mb-5 font-bold text-yellow-300 text-2xl">Signup</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white/75 flex flex-col gap-4 bg-slate-100 p-6 rounded-md shadow-md"
      >
        <label>
          <input
            className="p-2 w-full rounded-md outline-none"
            type="text"
            onChange={(e) => {
              setName(e.target.value);
            }}
            placeholder="Name"
            value={name}
            required
          />
        </label>
        <label>
          <input
            className="p-2 w-full rounded-md outline-none"
            type="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="Email"
            value={email}
            required
          />
        </label>
        <label>
          <input
            type="Password"
            className="p-2 w-full rounded-md outline-none"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
            placeholder="Password"
            required
          />
        </label>
        {!IsPending && <button className="bg-black p-2 text-white rounded-md w-1/2 mx-auto mt-4">
          Signup
        </button>}
        {IsPending && (
          <button
            className="bg-black p-2 text-white rounded-md w-1/2 mx-auto mt-4"
            disabled
          >
            loading
          </button>
        )}
        {error && <p>{error}</p>}
      </form>
    </div>
  );
}
