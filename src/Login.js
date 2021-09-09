import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Login.css";
import { auth } from "./firebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "@firebase/auth";

const initialForm = {
  email: "",
  password: "",
};
const Login = () => {
  const [form, setForm] = useState(initialForm);
  const history = useHistory();
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, form.email, form.password)
      .then((userCredential) => {
        const { user } = userCredential;
        console.log("login", user);

        if (user) {
          history.push("/");
        }
      })
      .catch((err) => alert(`${err.code}: ${err.message}`));
    //firebase
  };
  const register = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, form.email, form.password)
      .then((userCredential) => {
        const { user } = userCredential;
        console.log(user);
        if (user) {
          history.push("/");
        }
      })
      .catch((err) => alert(`${err.code}: ${err.message}`));
  };
  return (
    <div className="login">
      <Link to="/">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/640px-Amazon_logo.svg.png"
          alt=""
          className="login__logo"
        />
      </Link>
      <div className="login__container">
        <h1>Sign in</h1>
        <form>
          <h5>email</h5>
          <input
            onChange={handleChange}
            type="text"
            name="email"
            value={form.email}
          />
          <h5>Password</h5>
          <input
            onChange={handleChange}
            type="password"
            name="password"
            value={form.password}
          />

          <button onClick={signIn} className="login__SignInButton">
            Sign in
          </button>
        </form>
        <p>
          By sign-in you agree to the AMAZON FAKE CLONNE Conditions of use &
          Sale
        </p>
        <button onClick={register} className="login__registerButton">
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
};

export default Login;
