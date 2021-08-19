import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "../style/Error.module.css";
import image from "../images/notify.svg";

export function Error() {
  const location = useLocation();
  const state = location.state;
  console.log(state);
  return (
    <div className={styles.container}>
      <img src={image} alt="Error" className={styles.image} />
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
