import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../Context/UserProvider";
import { useNavigate, useLocation } from "react-router-dom";
import Loader from "react-loader-spinner";
import "./auth.css";
import {
  instance,
  setAuthForServiceCalls,
  saveUserToLocalStorage
} from "../../Utils/authConfig";
import React from "react";

export const Login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [mesg, setMesg] = useState({
    success: false,
    mesg: ""
  });
  const { login, userDispatch } = useAuth();

  useEffect(() => {
    if (login) {
      navigate("/categories");
    }
  }, []);
  const [userDetails, setUserDetails] = useState({
    username: "",
    password: ""
  });

  const onType: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const { name, value } = event.target;
    setUserDetails((prevdetails) => {
      return {
        ...prevdetails,
        [name]: value
      };
    });
  };

  const loginUser = async (event: React.SyntheticEvent) => {
    setLoading(true);
    event.preventDefault();
    try {
      const { success, token, user, message } = await instance.post(
        "/user/login",
        userDetails
      );
      console.log(token, message);
      if (success) {
        setLoading(false);
        userDispatch({
          type: "SET_LOGIN",
          payload: { token, username: user.username, fullname: user.fullname }
        });
        setAuthForServiceCalls(token);
        saveUserToLocalStorage(user, token);
        setUserDetails({
          username: "",
          password: ""
        });
        navigate("/categories");
      } else {
        setMesg({ success: false, mesg: message });
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="login-page">
      <div className="form-container">
        <div className="form-header">
          <h2 style={{ margin: "1rem auto" }}>Login</h2>
        </div>
        <form
          onSubmit={(event: React.SyntheticEvent) => loginUser(event)}
          className="auth-form"
        >
          <div className="input-group">
            <label className="input-label" htmlFor="input-uname">
              Username
            </label>
            <input
              className="input input-md"
              type="text"
              id="input-uname"
              placeholder="username"
              name="username"
              required
              value={userDetails.username}
              onChange={(event) => onType(event)}
            />
          </div>
          <div className="input-group">
            <label className="input-label" htmlFor="input-pass">
              Password
            </label>
            <input
              className="input input-md"
              type="password"
              id="input-pass"
              placeholder="password"
              name="password"
              required
              value={userDetails.password}
              onChange={(event) => onType(event)}
            />
          </div>
          {mesg.success ? (
            <div className="success-mesg">{mesg.mesg}</div>
          ) : (
            <div className="err-mesg">{mesg.mesg}</div>
          )}
          <button type="submit" className="btn btn-lg">
            Login
          </button>
          <br />
          <span>
            <small>
              Not a member..? <Link to="/signup">Signup</Link>
            </small>
          </span>
        </form>
      </div>
      {loading && (
        <div className="loader-container">
          <Loader
            type="RevolvingDot"
            color="#2bc48a"
            height={100}
            width={100}
            timeout={2000}
          />
        </div>
      )}
      {/* {showToast && (
        <div className="toast toast-n" ref={toast}>
          <p>{toastMessage}</p>
          <button className="btn toast-btn">X</button>
        </div>
      )} */}
    </div>
  );
};
