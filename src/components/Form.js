import React, { useState, useContext } from "react";
import axios from "axios";
import styles from "../style/Form.module.css";
import { BooksContext } from "../store/BooksContext";
import { useHistory } from "react-router-dom";

//Component for the form in the Home

export function Form() {
  const [value, setValue] = useState("");
  const { setBook, setLoading } = useContext(BooksContext);
  const history = useHistory();

  //The value for the controlled input

  function changeHandler(e) {
    setValue(e.target.value);
  }

  //Fetching the data when the form is submitted

  async function formSubmit(e) {
    try {
      e.preventDefault();
      setLoading(true);

      let data = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(
          value
        )}&maxResults=12&key=${process.env.REACT_APP_API_KEY}`
      );

      if (!data.data.totalItems) {
        throw new Error("No results");
      }

      let booksArray = data.data.items.map((item) => {
        return item.volumeInfo;
      });
      setBook(booksArray);
    } catch (err) {
      history.push({ pathname: "../pages/Error", state: { err } });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className={styles.container}>
      <label htmlFor="book-name" className={styles.label}>
        Insert a book title or an author name
      </label>

      <form onSubmit={formSubmit} className={styles.form}>
        <input
          className={styles.input}
          id="book-name"
          type="text"
          value={value}
          onChange={changeHandler}
          required
        ></input>
        <button type="submit" className={styles.button}>
          Submit the form
        </button>
      </form>
    </div>
  );
}
