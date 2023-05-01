import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { Spinner } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Header from "../components/Header";
import { modalsError } from "../helpers/modalsErrors";

export default function ForgotPassword() {
  const [emailValue, setEamilValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [loginBtn, setLoginBtn] = useState(false);
  const [passwordChanged, setPasswordChanged] = useState(false);

  const [index, setIndex] = useState(0);
  const [diableBtn, setDisableBtn] = useState(false);
  const [otp, setOtp] = useState("");

  const navigate = useNavigate();

  const submitOtp = async (e) => {
    e.preventDefault();
    setDisableBtn(true);
    await axios({
      method: "post",
      url: "https://profixing-back-production.up.railway.app/user/otp",
      data: { email: emailValue, otp },
    })
      .then((res) => {
        console.log("res>>>>>", res);
        if (res.status == 200) {
          toast.success("Password Changed");
          setDisableBtn(false);
          navigate("/login");
          setPasswordChanged(false);
        }
      })
      .catch((err) => {
        console.log("err>>", err);
        setDisableBtn(false);
        modalsError(err);
      });
  };
  const changeIndex = (e) => {
    console.log(index)
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

  const update = async () => {
    setLoginBtn(true);
    await axios({
      method: "put",
      url: "https://profixing-back-production.up.railway.app/user/updatePassword",
      data: { email: emailValue, password: passwordValue },
    })
      .then((res) => {
        if (res.status == 200) {
          toast.success("You will receive an otp");
          setLoginBtn(false);
          setTimeout(()=>{
            setPasswordChanged(true);
          },[1500])
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
      {passwordChanged ? (
        <div className="opt-container">
          <form onSubmit={submitOtp}>
            <div>
              <h3 className="my-3 primary">Enter OTP to Verify Account</h3>
              <p className="otp-para">Enter OTP to continue</p>
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
              <input
                type="submit"
                value={diableBtn ? "Submitting..." : "Submit"}
                className="btn btn-info white"
                disabled={diableBtn}
              />
            </div>
          </form>
        </div>
      ) : (
        <>
          <Header />
          <div className="login_page">
            <div className="box">
              <div className="form">
                <h3 className="primary text-center">Change Password</h3>
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

                  <span>New Password</span>
                  <i></i>
                </div>
                <div className="links">
                  <a href="/login">Login</a>
                </div>
                <button
                  disabled={loginBtn}
                  className="register-btn"
                  onClick={update}
                >
                  {loginBtn ? "Updating" : "Update"}
                </button>
                <div className="d-flex justify-content-center mt-1">
                  {loginBtn ? (
                    <Spinner animation="border" style={{ color: "#50d1c0" }} />
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
