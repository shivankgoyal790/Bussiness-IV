import "./App.css";
import React, { Suspense } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Footer from "./Components/Footer/Footer";
const Home = React.lazy(() => import("./Pages/Home/Home"));
const ContactUs = React.lazy(() => import("./Pages/ContactUs/ContactUs"));
const Details = React.lazy(() => import("./Pages/Details/Details"));
const Portfolio = React.lazy(() => import("./Pages/Portfolio/Portfolio"));
const About = React.lazy(() => import("./Pages/About/About"));
const Services = React.lazy(() => import("./Pages/Services/Services"));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>hi</div>}>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/about" exact>
            <About />
          </Route>
          <Route path="/services" exact>
            <Services />
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
      </Suspense>
      <Footer />
    </Router>
  );
}

export default App;
