import { onAuthStateChanged } from "@firebase/auth";
import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "./App.css";
import Checkout from "./Checkout";
import { useStateValue } from "./context/StateProvider";
import { auth } from "./firebaseConfig";
import Header from "./Header";
import Home from "./Home";
import Login from "./Login";

function App() {
  const [_, dispatch] = useStateValue();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log(user);

      if (user) {
        dispatch({ type: "SET_USER", user });
        console.log("logeado");
      } else {
        dispatch({ type: "SET_USER", user: null });

        console.log("sin usuario");
      }
    });
  }, []);
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/login" component={Login}></Route>
          <Route exact path="/checkout">
            <Header />

            <Checkout />
          </Route>
          <Route exact path="/">
            <Header />

            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
