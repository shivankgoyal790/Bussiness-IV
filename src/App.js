import "./App.css";
import Home from "./Pages/Home/Home";
import ContactUs from "./Pages/ContactUs/ContactUs";
import Details from "./Pages/Details/Details";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Portfolio from "./Pages/Portfolio/Portfolio";
import Footer from "./Components/Footer/Footer";
import About from "./Pages/About/About";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/about" exact>
          <About />
        </Route>
        <Route path="/Contact" exact>
          <ContactUs />
        </Route>
        <Route path="/portfolio" exact>
          <Portfolio />
        </Route>
        <Route path="/details" exact>
          <Details />
        </Route>
        <Redirect to="/"></Redirect>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
