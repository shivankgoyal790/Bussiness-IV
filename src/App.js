import "./App.css";
import Home from "./Pages/Home/Home";
import ContactUs from "./Pages/ContactUs/ContactUs";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/Contact" exact>
          <ContactUs />
        </Route>
        <Redirect to="/"></Redirect>
      </Switch>
    </Router>
  );
}

export default App;
