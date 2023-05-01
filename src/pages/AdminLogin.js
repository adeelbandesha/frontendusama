import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { modalsError } from "../helpers/modalsErrors";

export default function AdminLogin() {
  const [emailValue, setEamilValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [loginBtn, setLoginBtn] = useState(false);

  const navigate = useNavigate();

  const adminLogin = async () => {
    setLoginBtn(true);
    await axios({
      method: "post",
      url: "https://profixing-back-production.up.railway.app/user/login",
      data: { email: emailValue, password: passwordValue },
    })
      .then((res) => {
        if (res.status == 200) {
          toast.success("Loggedin Successfully");
          localStorage.setItem("adminToken", res.data?.token);
          localStorage.setItem("user", JSON.stringify(res.data?.user));
          setLoginBtn(false);
          navigate("/admin/dashboard");
        }
      })
      .catch((err) => {
        console.log("err>>", err);
        setLoginBtn(false);
        modalsError(err);
      });
  };
  return (
    <div class="form-container">
      <form className="admin-form">
        <h2 className="primary">Login</h2>
        <input
          type="email"
          placeholder="Username"
          required
          className="admin-text"
          value={emailValue}
          onChange={(e) => setEamilValue(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          required
          className="admin-password"
          value={passwordValue}
          onChange={(e) => setPasswordValue(e.target.value)}
        />
        <input
          type="submit"
          value="Submit"
          className="admin-submit"
          onClick={adminLogin}
          disabled={loginBtn}
        />
      </form>
    </div>
  );
}
