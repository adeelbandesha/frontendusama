import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { modalsError } from "../helpers/modalsErrors";

function Otp() {
  const [index, setIndex] = useState(0);
  const [diableBtn, setDisableBtn] = useState(false);
  const [otp, setOtp] = useState("");


  const navigate = useNavigate()

  const submitOtp = async (e) => {
    e.preventDefault();
    setDisableBtn(true)
    await axios({
      method: "post",
      url: "https://profixing-back-production.up.railway.app/otp",
      data: { otp },
    })
      .then((res) => {
        console.log("res>>>>>", res);
        if (res.status == 200) {
          toast.success("Registration Completed");
          setDisableBtn(false);
          navigate("/login");
        }
      })
      .catch((err) => {
        console.log("err>>", err);
        setDisableBtn(false);
        modalsError(err);
      });
  };
  const changeIndex = (e) => {
    if (e.key == "Backspace" && e.target.value == "" && index != 0) {
      setIndex((index) => index - 1);
      setOtp()
    }
    if (e.key != "Backspace" && index != 3 && e.target.value) {
      setIndex((index) => index + 1);
    }
  };

  const setFocus = () => {
    let element = document.getElementById(`input${index}`);
    element.focus();
  };

  useEffect(() => {
    setFocus();
  }, [index]);
  return (
    <div className="opt-container">
      <form onSubmit={submitOtp}>
        <div>
          <h3 className="my-3 primary">Enter OTP to Verify Account</h3>
          <p className="otp-para">
            Your account will not active untill you enter otp
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
  );
}

export default Otp;
