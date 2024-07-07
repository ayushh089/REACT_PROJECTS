import React, { useContext, useState } from "react";
import UserContext from "../context/UserContext";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
const [expand,setExpand]=useState(false)
  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ username, password });
  };
  return (
    <div className="bg-white round ">
      <div className="bg-gray-400 rounded-3xl">
        <div>
          <h2>LogIn</h2>
        </div>
        <div class="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            class="w-full p-3 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></input>

          <input
            type="password"
            placeholder="Password"
            class="w-full p-3 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></input>
        </div>
        <div class="p-4">
          <button
            class="bg-blue-400 text-white p-3 rounded-xl hover:bg-blue-500"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
