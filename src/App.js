import React from "react";
// Import pages
import AboutUs from "./pages/AboutUs";
import ContactUS from "./pages/ContactUS";
import OurWork from "./pages/OurWork";
import Nav from "./components/Nav";
// Import Styles
import GlobalStyle from "./components/GlobalStyleComponents";
// Import React Router
import { Switch, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Switch>
        <Route path="/" exact>
          <AboutUs />
        </Route>
        <Route path="/work">
          <OurWork />
        </Route>
        <Route path="/contact">
          <ContactUS />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
