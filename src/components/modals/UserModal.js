import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Button, Form, Spinner } from "react-bootstrap";
import axios from "axios";
import { toast } from "react-toastify";
import { modalsError } from "../../helpers/modalsErrors";


export default function UserModal({ show, hide }) {
  const [emailValue, setEamilValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [loginBtn, setLoginBtn] = useState(false);
  const [userRegistered, setUserRegistered] = useState(false);

  const [signupBtn, setSignupBtn] = useState(false);
  const [formData, setFormData] = useState({});


  const register = async () => {
    if (formData.password == formData.confirmPassword) {
      setSignupBtn(true);
      await axios({
        method: "post",
        url: "https://profixing-back-production.up.railway.app/user",
        data: { email: formData.identifier, password: formData.password },
      })
        .then((res) => {
          console.log("res>>>>>", res)
          if (res.status == 200) {
            localStorage.setItem("token", res.data?.token);
            localStorage.setItem("user", res.data);
            toast.success("User Registered");
            setSignupBtn(false);
            hide(false)
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
          hide(false)
        }
      })
      .catch((err) => {
        console.log("err>>", err);
        setLoginBtn(false);
        modalsError(err);
      });
  };

  return (
    <div>
      <Modal
        show={show}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
          {userRegistered ? (
                <div className="modal-form">
                  <h2>Login</h2>
                  <div className="inputBox">
                    <input
                      type="text"
                      required
                      value={emailValue}
                      onChange={(e) => setEamilValue(e.target.value)}
                    />
                    <span>Phone or Email</span>
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
                  <div className="links">
                    <a className="pointer" onClick={()=>setUserRegistered(false)}>Sign Up</a>
                  </div>
                  <button
                    disabled={loginBtn}
                    className="register-btn"
                    onClick={login}
                  >
                    {loginBtn ? "Logging in" : "Login"}
                  </button>
                  <div className="d-flex justify-content-center mt-1">
                    {loginBtn ? (
                      <Spinner
                        animation="border"
                        style={{ color: "#50d1c0" }}
                      />
                    ) : (
                      ""
                    )}
                  </div>
                </div>
          ) : (
                <div className="modal-form">
                  <h2>SignUp</h2>
                  <div className="inputBox">
                    <input
                      type="text"
                      required
                      value={formData["identifier"]}
                      onChange={(e) => inputForm(e, "identifier")}
                    />
                    <span>Email or Phone</span>
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
                    <a className="pointer" onClick={()=>setUserRegistered(true)}>Login</a>
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
                      <Spinner
                        animation="border"
                        style={{ color: "#50d1c0" }}
                      />
                    ) : (
                      ""
                    )}
                  </div>
                </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={() => hide(false)}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
