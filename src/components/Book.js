import React from "react";
import styles from "../style/Book.module.css";
import { Link } from "react-router-dom";

//Component for a single book in the Booklist

export function Book(props) {
  //Format the authors prop if the authors are more than one
  const authors = props.authors?.toString().replace(/,/g, ", ");

  return (
    <div className={styles.book}>
      {/* Wrapping the entire book in a link for the SingleBook page*/}
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
