import React, { useContext } from "react";
import styles from "../style/Booklist.module.css";
import { BooksContext } from "../store/BooksContext";
import { Book } from "./Book";

export function Booklist() {
  const { books, loading } = useContext(BooksContext);

  return (
    <div className={styles.books_container}>
      {loading ? (
        <h2 className={styles.loading}>Loading...</h2>
      ) : books.length ? (
        books.map((item, index) => {
          let id;
          if (item.industryIdentifiers) {
            id = item.industryIdentifiers[0].type.concat(
              "",
              item.industryIdentifiers[0].identifier
            );
          } else {
            id = index;
          }

          return (
            <Book
              title={item.title}
              authors={item.authors}
              image={item.imageLinks?.thumbnail}
              identifier={id}
              key={id}
            ></Book>
          );
        })
      ) : (
        ""
      )}
    </div>
  );
}
