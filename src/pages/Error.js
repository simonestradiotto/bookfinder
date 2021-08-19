import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "../style/Error.module.css";

//The error page. Rendered if the search produced no results or the path of the page is unknown

export function Error() {
  const location = useLocation();
  const state = location.state;

  return (
    <div className={styles.container}>
      <h1 className={styles.error}>
        {state
          ? "Apparently your research produced no results; please check if the title or the author name was correct."
          : "Page not found"}
      </h1>

      <Link className={styles.link} to="/">
        Back to the Home Page
      </Link>
    </div>
  );
}
