import React from "react";
import styles from "../style/Book.module.css";
import { Link } from "react-router-dom";

export function Book(props) {
  const authors = props.authors?.toString().replace(/,/g, ", ");

  return (
    <div className={styles.book}>
      <Link
        to={{
          pathname: "/SingleBook",
          state: { id: props.identifier, auth: authors },
        }}
        className={styles.link}
      >
        <h2 className={styles.title}>{props.title}</h2>
        <h4 className={styles.authors}> {authors ? `by ${authors}` : ""}</h4>
        <img src={props.image} alt="Thumbnail" className={styles.image}></img>
      </Link>
    </div>
  );
}
