import "./user.css";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/UserProvider";

export const User = () => {
  const { token, username, userDispatch } = useAuth();
  const navigate = useNavigate();
  if (!token) {
    navigate("/login");
  }
  return (
    <div className="user-page">
      <div className="user-info">
        {token ? (
          <>
            {" "}
            <img
              className="avatar-small profile"
              src="./user-avatar.svg"
              alt="Avatar"
            />
            <h3>
              {" "}
              Welcome <span className="username">{username}</span>
            </h3>
            <button className="btn btn-xlg" onClick={() => navigate("/")}>
              Home
            </button>
            <button className="btn btn-xlg" onClick={() => navigate("/stats")}>
              Stats
            </button>
            <button
              className="btn btn-xlg"
              onClick={() => userDispatch({type: "SET_LOGOUT" })}
            >
              Logout
            </button>
           
          </>
        ) : (
          <div className="">
            <Link to="/login">Login </Link>
          </div>
        )}
      </div>
    </div>
  );
};
