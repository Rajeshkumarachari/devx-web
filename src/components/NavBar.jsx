import { useDispatch, useSelector } from "react-redux";
import img from "../photo/twitter.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { removeUser } from "../utils/userSlice";
import { IoMdLogOut } from "react-icons/io";

const NavBar = () => {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await axios.post(BASE_URL + "/logout", {}, { withCredentials: true });
      dispatch(removeUser());
      navigate("/login");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="navbar bg-base-200">
      <div className="flex-1">
        <Link to="/" className=" flex">
          <img src={img} alt="devx-logo" className=" cursor-pointer size-10" />
          <a className="btn btn-ghost text-xl mx-2">DevX</a>
        </Link>
      </div>
      {user && (
        <div className="flex-none gap-2">
          <div className="form-control">
            <p className="flex text-lg">
              Welcome, &nbsp;
              <span className=" font-semibold text-lg  cursor-pointer">
                {user.firstName}
              </span>
            </p>
          </div>
          <div className="dropdown dropdown-end mx-5 flex">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img alt="user" src={user.photoUrl} />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-48 p-2 shadow"
            >
              <li>
                <Link to="/profile" className="justify-between">
                  Profile
                </Link>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a className="hover:bg-red-200 span" onClick={handleLogout}>
                  Logout <IoMdLogOut className=" size-5" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
