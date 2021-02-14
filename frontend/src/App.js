
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Link, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ProfileScreen from "./screens/ProfileScreen";
import RegisterScreen from "./screens/RegisterScreen";
import SigninScreen from "./screens/SigninScreen";
function App() {
  return (
    <BrowserRouter>
      <div className="grid-containter">
        <header className="row">
          <div>
            <Link to="/">KIDSHARE</Link>
          </div>
          <div>
            <Link to="/profile">Profile</Link>
            <Link to="/family-search">Search Family</Link>
          </div>
        </header>
        <main>
          <Route path="/" component={HomeScreen} exact></Route>
          <Route path="/user/:id" component={ProfileScreen}></Route>
          <Route path="/register" component={RegisterScreen}></Route>
          <Route path="/register" component={SigninScreen}></Route>
        </main>
        <footer className="row center">All rights reserved</footer>
      </div>
    </BrowserRouter>

  );
}

export default App;
