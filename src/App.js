import "./App.css";
import React, { Suspense } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Footer from "./components/footer/Footer";
const Home = React.lazy(() => import("./pages/home/Home"));
const ContactUs = React.lazy(() => import("./pages/contactUs/ContactUs"));
const Details = React.lazy(() => import("./pages/details/Details"));
const Portfolio = React.lazy(() => import("./pages/portfolio/Portfolio"));
const About = React.lazy(() => import("./pages/about/About"));
const Services = React.lazy(() => import("./pages/services/Services"));

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
