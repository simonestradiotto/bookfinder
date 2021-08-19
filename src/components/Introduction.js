import React from "react";
import styles from "../style/Introduction.module.css";

export function Introducion() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome to the book finder!</h1>
      <p className={styles.paragraph}>
        This application will help you to find different editions of a book you
        are looking for. You can also search by an author!
      </p>
    </div>
  );
}
