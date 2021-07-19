import React from "react";
// Import pages
import AboutUs from "./pages/AboutUs";
import Skills from "./pages/Skills";
import OurWork from "./pages/OurWork";
import Nav from "./components/Nav";

// Import Styles
import GlobalStyle from "./components/GlobalStyleComponents";
// Import React Router
import { Switch, Route, useLocation } from "react-router-dom";
// Animatiom
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact>
            <AboutUs />
          </Route>
          <Route path="/work" exact>
            <OurWork />
          </Route>

          <Route path="/contact">
            <Skills />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
