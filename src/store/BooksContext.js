import React, { useState, createContext } from "react";

export const BooksContext = createContext();

export function BooksProvider(props) {
  const [books, setBook] = useState({});
  const [loading, setLoading] = useState(false);

  return (
    <BooksContext.Provider value={{ books, setBook, loading, setLoading }}>
      {props.children}
    </BooksContext.Provider>
  );
}
