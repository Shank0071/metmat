import { useState } from "react";
import { useLogin } from "../hooks/useLogin";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, isPending } = useLogin();


  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <div className="max-w-sm mx-auto">
      <h1 className="text-center mt-7 mb-5 font-bold text-yellow-300 text-2xl">Login</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white/75 flex flex-col gap-4 bg-slate-100 p-6 rounded-md shadow-md"
      >
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
        {!isPending && <button className="bg-black p-2 text-white rounded-md w-1/2 mx-auto mt-4">Login</button>}
        {isPending && <button className="bg-black p-2 text-white rounded-md w-1/2 mx-auto mt-4" disabled>loading</button>}
        {error && <p className="text-red-500">{error}</p>}
      </form>
    </div>
  );
}
