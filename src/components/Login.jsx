import axios from "axios";
import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";
const Login = () => {
  const [emailId, setEmailId] = useState("tamanna@gmail.com");
  const [password, setPassword] = useState("Tamanna@123");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post(
        BASE_URL + "/login",
        {
          emailId,
          password,
        },
        { withCredentials: true }
      );
      dispatch(addUser(res.data));
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className=" flex justify-center my-10">
      <div className="card bg-base-300 w-96 shadow-xl">
        <div className="card-body">
          <h2 className="card-title justify-center">
            <FaUserCircle className=" size-8" /> Login
          </h2>
          <div className="">
            <label className="form-control w-full max-w-xs py-2">
              <div className="label">
                <span className="label-text text-gray-500">Email id</span>
              </div>
              <input
                type="text"
                value={emailId}
                placeholder="Type your email here"
                className="input input-bordered w-full max-w-xs"
                onChange={(e) => setEmailId(e.target.value)}
              />
            </label>
            <label className="form-control w-full max-w-xs py-4">
              <div className="label">
                <span className="label-text text-gray-500">Password</span>
              </div>
              <input
                type="text"
                value={password}
                placeholder="Type your password here"
                className="input input-bordered w-full max-w-xs"
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
          </div>
          <div className="card-actions justify-center ">
            <button
              onClick={handleLogin}
              className="bg-indigo-600 text-white px-4 flex py-1 rounded-md text-xl"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
