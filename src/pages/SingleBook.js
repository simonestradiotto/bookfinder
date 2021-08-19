import React, { useContext } from "react";
import styles from "../style/SingleBook.module.css";
import { Link, useLocation } from "react-router-dom";
import { BooksContext } from "../store/BooksContext";

export function SingleBook() {
  const books = useContext(BooksContext);
  const location = useLocation();
  const state = location.state;

  let book;

  if (books.books.length) {
    book = books.books.find((book, index) => {
      return (
        (book.industryIdentifiers
          ? book.industryIdentifiers[0].type.concat(
              "",
              book.industryIdentifiers[0].identifier
            )
          : index) === state.id
      );
    });
  }

  return (
    <div className={styles.container}>
      {books.books.length ? (
        <div className={styles.book}>
          <div className={styles.img_container}>
            <img
              src={book.imageLinks?.thumbnail}
              alt="Thumbnail not avaiable"
              className={styles.image}
            ></img>
          </div>
          <div className={styles.title_container}>
            <h2 className={styles.title}>{book.title}</h2>
            <h4 className={styles.subtitle}>
              {state.auth ? `by ${state.auth}` : ""}
            </h4>
          </div>

          <div className={styles.info_container}>
            {book.publisher && book.publishedDate && book.pageCount && (
              <p className={styles.publisher}>
                This edition was published by <strong>{book.publisher} </strong>
                on <strong> {book.publishedDate}</strong>, and is{" "}
                <strong>{book.pageCount}</strong> pages long.
              </p>
            )}

            {book.description ? (
              <p className={styles.description}>{book.description}</p>
            ) : (
              ""
            )}
            <a
              href={book.canonicalVolumeLink}
              target="_blank"
              rel="noreferrer"
              className={styles.gplay_link}
            >
              Buy it on Google Play
            </a>
          </div>
        </div>
      ) : (
        ""
      )}
      <Link id="home_link" to="/" className={styles.link}>
        Home
      </Link>
    </div>
  );
}
