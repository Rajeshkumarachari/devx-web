import { useSelector } from "react-redux";
import img from "../photo/twitter.png";
import { Link } from "react-router-dom";

const NavBar = () => {
  const user = useSelector((store) => store.user);

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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link to="/profile" className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </Link>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
