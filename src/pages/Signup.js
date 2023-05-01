import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Header from "../components/Header";
import { modalsError } from "../helpers/modalsErrors";

export default function Signup() {
  const [signupBtn, setSignupBtn] = useState(false);
  const [formData, setFormData] = useState({});
  const [signupCompleted, setSignupCompleted] = useState(false);
  const [index, setIndex] = useState(0);
  const [diableBtn, setDisableBtn] = useState(false);
  const [otp, setOtp] = useState("");


  const navigate = useNavigate()

  const submitOtp = async (e) => {
    e.preventDefault();
    setDisableBtn(true)
    await axios({
      method: "post",
      url: "https://profixing-back-production.up.railway.app/user/otp",
      data: {email: formData.identifier, otp },
    })
      .then((res) => {
        console.log("res>>>>>", res);
        if (res.status == 200) {
          toast.success("Registration Completed");
          setDisableBtn(false);
          navigate("/login");
          setSignupCompleted(false)
        }
      })
      .catch((err) => {
        console.log("err>>", err);
        setDisableBtn(false);
        modalsError(err);
      });
  };
  const changeIndex = (e) => {
    if (e.key == "Backspace") {
      if(index != 0){
        setOtp(otp.slice(0, otp.length-1));
        setIndex((index) => index - 1);
      } else {
        setOtp(otp.slice(0, otp.length-1));
      }
    }
    if (e.key != "Backspace"  && e.target.value) {
      if(index == 3){
        if(otp.length < 4){
          setOtp(otp => otp+e.target.value);
        }
      } else{
        setOtp(otp => otp+e.target.value);
        setIndex((index) => index + 1);
      }
    }
  };

  const setFocus = () => {
    let element = document.getElementById(`input${index}`);
    element?.focus();
  };

  useEffect(() => {
    setFocus();
  }, [index]);

  const register = async () => {
    if (formData.password == formData.confirmPassword) {
      setSignupBtn(true);
      await axios({
        method: "post",
        url: "https://profixing-back-production.up.railway.app/user",
        data: { email: formData.identifier, password: formData.password },
      })
        .then((res) => {
          console.log("res>>>>>", res);
          if (res.status == 200) {
            toast.success("An otp will be sent on your email");
            setSignupBtn(false);
            setTimeout(() => {
              setSignupCompleted(true);
            }, [1500]);
          }
        })
        .catch((err) => {
          console.log("err>>", err);
          setSignupBtn(false);
          modalsError(err);
        });
    } else {
      toast.error("Both passwords must be same");
    }
  };
  function inputForm(e, key) {
    let data = formData;
    data[key] = e.target.value;
    setFormData({ ...data });
  }

  return (
    <>
    {
    signupCompleted?(
      <div className="opt-container">
      <form onSubmit={submitOtp}>
        <div>
          <h3 className="my-3 primary">Enter OTP to Verify Account</h3>
          <p className="otp-para">
            Enter OTP to continue
          </p>
        </div>
        <div>
          <input
            type="text"
            maxlength="1"
            id="input0"
            pattern="[0-9]"
            inputmode="numeric"
            onKeyUp={(e) => changeIndex(e)}
          />
          <input
            type="text"
            maxlength="1"
            id="input1"
            pattern="[0-9]"
            inputmode="numeric"
            onKeyUp={(e) => changeIndex(e)}
          />
          <input
            type="text"
            maxlength="1"
            id="input2"
            pattern="[0-9]"
            inputmode="numeric"
            onKeyUp={(e) => changeIndex(e)}
          />
          <input
            type="text"
            maxlength="1"
            id="input3"
            pattern="[0-9]"
            inputmode="numeric"
            onKeyUp={(e) => changeIndex(e)}
          />
        </div>
        <div className="mt-5">
          <input type="submit" value={diableBtn? "Submitting...": "Submit"} className="btn btn-info white" disabled={diableBtn} />
        </div>
      </form>
    </div>
    ):
  <>
      <Header />
      <div className="login_page">
        <div className="box">
          <div className="form">
            <h2>SignUp</h2>
            <div className="inputBox">
              <input
                type="email"
                required
                value={formData["identifier"]}
                onChange={(e) => inputForm(e, "identifier")}
              />
              <span>Email</span>
              <i></i>
            </div>
            <div className="inputBox">
              <input
                type="Password"
                required
                value={formData["password"]}
                onChange={(e) => inputForm(e, "password")}
              />
              <span>Password</span>
              <i></i>
            </div>
            <div className="inputBox">
              <input
                type="password"
                required
                value={formData["confirmPassword"]}
                onChange={(e) => inputForm(e, "confirmPassword")}
              />

              <span>Confirm Passsword</span>
              <i></i>
            </div>
            <div className="links">
              <a href="/login">Login</a>
            </div>
            <button
              disabled={signupBtn}
              className="register-btn"
              onClick={register}
            >
              {signupBtn ? "Signing up" : "Sign up"}
            </button>
            <div className="d-flex justify-content-center mt-1">
              {signupBtn ? (
                <Spinner animation="border" style={{ color: "#50d1c0" }} />
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
      </>
  }
  </>
  );
}
