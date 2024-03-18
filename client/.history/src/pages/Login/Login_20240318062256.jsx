import React from "react";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import "./login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const [open, setOpen] = useState(null)

  const navigate = useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const res = await axios.post("http://localhost:8800/api/auth/login", {
        email,
        password,
      })
      localStorage.setItem("currentUser", JSON.stringify(res.data))
      // console.log(res);
      navigate("/")
    } catch (error) {
      setError(error.response.data)
    }
    console.log(error);
  }

  return (
    <div className="Login-container">
      <div className="login">
        <div className="title">
          <p className="heading">
            <span className="logo">
              <a style={{ color: "#312ECB" }}>
                Smart</a>Leave.
            </span>
          </p>
          <h3>Log in to your Account</h3>
          <p>Welcome back! Proceed to login:</p>
        </div>
        <div className="main-login">
          <div className="input">
            <EmailOutlinedIcon/>
            <input type="email" placeholder="johndoe@sfit.ac.in" onChange={(e) => setEmail(e.target.value)}/>
          </div>
          <div className="input">
            <LockOutlinedIcon/>
            <input type="password" placeholder="Your password" onChange={(e) => setPassword(e.target.value)}/>
          </div>
          <button className="" onClick={handleSubmit}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
