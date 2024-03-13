import React from "react";
import Book from "./Book";

const Books = ({ books }) => {
  return (
    <div className="container mx-auto grid grid-cols-1 gap-8 max-w-7xl md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {books.map((book) => (
        <Book book={book} key={book.id} />
      ))}
    </div>
  );
};

export default Books;
