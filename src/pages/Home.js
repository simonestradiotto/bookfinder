import React from "react";
import styles from "../style/Home.module.css";
import { Booklist } from "../components/Booklist";
import { Form } from "../components/Form";
import { Introducion } from "../components/Introduction";

export function Home() {
  return (
    <>
      <header className={styles.header}>
        <Introducion />
        <Form />
      </header>
      <Booklist />
    </>
  );
}
