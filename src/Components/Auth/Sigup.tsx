import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./auth.css";
import axios from "axios";
import { useAuth } from "../../Context/UserProvider";
import React from "react";
import { instance } from "../../Utils/authConfig";

export const Signup = () => {
  const { userDispatch } = useAuth();
  const navigate = useNavigate();
  const [mesg, setMesg] = useState({
    success: false,
    mesg: ""
  });
  const [userDetails, setUserDetails] = useState({
    email: "",
    fullname: "",
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
  const singupUser = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    try {
      const response = await instance.post(
        "/user/signup",
        userDetails
      );
      console.log(response.data);
      if (response.data.success) {
        console.log(response.data.message);
        setMesg({success:true,mesg:response.data.message})
        setUserDetails({
          username: "",
          email: "",
          fullname: "",
          password: ""
        });
      } else {
        setMesg({ success: false, mesg: response.data.message });
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="login-page">
      <div className="form-container">
        <div className="form-header">
          <h2 style={{ margin: "1rem auto" }}>Sign-Up</h2>
        </div>
        <form onSubmit={(event) => singupUser(event)} className="auth-form">
          <div className="input-group">
            <label className="input-label" htmlFor="input-uname">
              Email
            </label>
            <input
              className="input input-lg"
              type="email"
              id="input-email"
              placeholder="user@gmail.com"
              required
              name="email"
              onChange={(event) => onType(event)}
              value={userDetails.email}
            />
          </div>
          <div className="input-group">
            <label className="input-label" htmlFor="input-uname">
              Full Name
            </label>
            <input
              className="input input-lg"
              type="text"
              id="input-fullname"
              placeholder="full name"
              required
              name="fullname"
              onChange={(event) => onType(event)}
              value={userDetails.fullname}
            />
          </div>
          <div className="input-group">
            <label className="input-label" htmlFor="input-uname">
              Username
            </label>
            <input
              className="input input-lg"
              type="text"
              id="input-uname"
              placeholder="username"
              required
              name="username"
              onChange={(event) => onType(event)}
              value={userDetails.username}
            />
          </div>
          <div className="input-group">
            <label className="input-label" htmlFor="input-pass">
              Password
            </label>
            <input
              className="input input-lg"
              type="password"
              id="input-pass"
              placeholder="password"
              name="password"
              onChange={(event) => onType(event)}
              required
              value={userDetails.password}
            />
          </div>
          {mesg.success ? (
            <div className="success-mesg">{mesg.mesg}</div>
          ) : (
            <div className="err-mesg">{mesg.mesg}</div>
          )}
          <button type="submit" className="btn btn-lg">
            Sign-Up
          </button>
          <br />
          <span>
            <small>
              {" "}
              Already a member..? <Link to="/login">Login</Link>
            </small>
          </span>
        </form>
      </div>
    </div>
  );
};
