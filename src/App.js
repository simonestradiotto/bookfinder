import React, { useEffect } from "react";
import styles from "./style/App.module.css";
import { Home } from "./pages/Home";
import { SingleBook } from "./pages/SingleBook";
import { BooksProvider } from "./store/BooksContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Error } from "./pages/Error";

function App() {
  useEffect(() => {
    let html = document.querySelector("html");
    let body = document.querySelector("body");
    let root = document.querySelector("#root");

    html.style.fontSize = "10px";
    html.style.backgroundColor = "#000";
    html.style.height = "100%";
    body.style.margin = "0";
    body.style.height = "100%";
    html.style.backgroundColor = "#000";
    root.style.height = "100%";
  }, []);

  return (
    <BooksProvider>
      <Router>
        <div className={styles.container}>
          <Switch>
            <Route exact path="/SingleBook">
              <SingleBook />
            </Route>

            <Route exact path="/">
              <Home />
            </Route>

            <Route path="*">
              <Error />
            </Route>
          </Switch>
          <Footer />
        </div>
      </Router>
    </BooksProvider>
  );
}

export default App;
