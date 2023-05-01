import axios from "axios";
import React from "react";
import { useState } from "react";
import { Spinner } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Header from "../components/Header";
import { modalsError } from "../helpers/modalsErrors";

export default function Login() {
  const [emailValue, setEamilValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [loginBtn, setLoginBtn] = useState(false);

  const navigate = useNavigate();

  const login = async () => {
    setLoginBtn(true);
    await axios({
      method: "post",
      url: "https://profixing-back-production.up.railway.app/user/login",
      data: { email: emailValue, password: passwordValue },
    })
      .then((res) => {
        if (res.status == 200) {
          toast.success("Login Successfully");
          localStorage.setItem("token", res.data?.token);
          localStorage.setItem("user", JSON.stringify(res.data?.user));
          setLoginBtn(false);
          navigate("/");
        }
      })
      .catch((err) => {
        console.log("err>>", err);
        setLoginBtn(false);
        modalsError(err);
      });
  };

  return (
    <>
    <Header />
      <div className="login_page">
        <div className="box">
          <div className="form">
            <h2>Login</h2>
            <div className="inputBox">
              <input
                type="email"
                required
                value={emailValue}
                onChange={(e) => setEamilValue(e.target.value)}
              />
              <span>Email</span>
              <i></i>
            </div>
            <div className="inputBox">
              <input
                type="password"
                required
                value={passwordValue}
                onChange={(e) => setPasswordValue(e.target.value)}
              />

              <span>Password</span>
              <i></i>
            </div>
            <div className="links d-flex justify-content-between">
              <a href="/forget">Forgot password?</a>
              <a href="/signup">Sign Up</a>
            </div>
            <button
              disabled={loginBtn}
              className="register-btn"
              onClick={login}
            >
              {loginBtn?  'Logging in': 'Login'}
            </button>
            <div className="d-flex justify-content-center mt-1">
            {loginBtn? <Spinner animation="border" style={{color: '#50d1c0'}} />: ''}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
