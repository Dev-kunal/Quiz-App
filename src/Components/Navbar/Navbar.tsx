import "./navbar.css";
import { Link } from "react-router-dom";
import { useAuth } from "../../Context/UserProvider";

export const Navbar = () => {
  const { login } = useAuth();
  console.log("login from Navbar", login);

  return (
    <div className="navbar navbar-right">
      <div className="nav-brand">
        <img src="./test.svg" className="brand-img" alt="brand" />
        <Link className="nav-brand-heading" to="/">
          Qui<span style={{ color: "#ffff" }}>zzy</span>
        </Link>
      </div>

      <div className={login ? "nav-group" : "nav-group-baseline"}>
        <div className="nav-item">
          {login ? (
            <Link to="/user">
              <img
                className="avatar-small xs user"
                src="./user-avatar.svg"
                alt="Avatar"
              />
            </Link>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </div>
      </div>
    </div>
  );
};
