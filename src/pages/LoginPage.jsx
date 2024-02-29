import "../assets/css/LoginPage.css";

import logo from "../assets/images/logo.svg";
import display from "../assets/images/display.png";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin(e) {
    e.preventDefault();

    const response = await fetch("http://localhost:3000/login", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    if (!response.ok) return;

    const credentials = await response.json();
    navigate("/home", { state: { token: credentials.token } });
  }

  return (
    <div className="login-page-container">
      <div className="form-container">
        <header>
          <img src={logo} alt="Knot" />
        </header>
        <form>
          <section>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="example@email.com"
            />
          </section>
          <section>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="*******"
            />
          </section>
          <button onClick={handleLogin}>Sign In</button>
        </form>
        <footer>
          <p>Don&apos;t have an account?</p>
          <p>
            <Link to="/signup">Create One!</Link>
          </p>
        </footer>
      </div>
      <div className="display-image">
        <img src={display} alt="" />
      </div>
    </div>
  );
}

export default LoginPage;
