import "./navbar.css";
import { Link } from "react-router-dom";
import { useAuth } from "../../Context/UserProvider";

export const Navbar = () => {
  const { token } = useAuth();

  return (
    <div className="navbar navbar-right">
      <div className="nav-brand">
        <Link className="nav-brand-heading" to="/">
          <img src="./test.svg" className="brand-img" alt="brand" />
          Quizzy
        </Link>
      </div>

      <div className={token ? "nav-group" : "nav-group-baseline"}>
        <div className="nav-item">
          {token ? (
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
