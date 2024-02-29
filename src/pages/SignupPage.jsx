import "../assets/css/SignupPage.css";

import logo from "../assets/images/logo.svg";
import display from "../assets/images/display.png";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function SignupPage() {
  const navigate = useNavigate();

  const [display_name, setDisplayName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  async function handleSignup(e) {
    e.preventDefault();

    const response = await fetch("http://localhost:3000/signup", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ display_name, email, password }),
    });
    if (!response.ok) return;

    const credentials = await response.json();
    navigate("/home", { state: { token: credentials.token } });
  }
  return (
    <div className="signup-page-container">
      <div className="form-container">
        <header>
          <img src={logo} alt="Knot" />
        </header>
        <form>
          <section>
            <label htmlFor="name">Display Name</label>
            <input
              type="text"
              name="display_name"
              id="display_name"
              value={display_name}
              onChange={(e) => setDisplayName(e.target.value)}
            />
          </section>
          <section>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="example@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </section>
          <section>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </section>
          <button onClick={handleSignup}>Create Account</button>
        </form>
        <footer>
          <p>Already have an account?</p>
          <p>
            <Link to="/login">Sign In!</Link>
          </p>
        </footer>
      </div>
      <div className="display-image">
        <img src={display} alt="" />
      </div>
    </div>
  );
}

export default SignupPage;
