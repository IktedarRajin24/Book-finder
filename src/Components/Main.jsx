import React, { useState } from "react";
import Actions from "./Actions";
import Books from "./Books";

const allBooks = [
  {
    id: 1,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    publish_date: "July 11, 1960",
    price: 10.99,
    image: "./images/book.png",
    isFavorite: false,
    rating: 4,
  },
  {
    id: 2,
    title: "1984",
    author: "George Orwell",
    publish_date: "June 8, 1949",
    price: 9.99,
    image: "./images/book.png",
    isFavorite: false,
    rating: 5,
  },
  {
    id: 3,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    publish_date: "April 10, 1925",
    price: 11.99,
    image: "./images/book.png",
    isFavorite: false,
    rating: 5,
  },
  {
    id: 4,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    publish_date: "July 11, 1960",
    price: 10.99,
    image: "./images/book.png",
    isFavorite: false,
    rating: 4,
  },
  {
    id: 5,
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling",
    publish_date: "June 26, 1997",
    price: 12.99,
    image: "./images/book.png",
    isFavorite: false,
    rating: 5,
  },
  {
    id: 6,
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    publish_date: "July 16, 1951",
    price: 9.99,
    image: "./images/book.png",
    isFavorite: false,
    rating: 4,
  },
  {
    id: 7,
    title: "Lord of the Flies",
    author: "William Golding",
    publish_date: "September 17, 1954",
    price: 8.99,
    image: "./images/book.png",
    isFavorite: false,
    rating: 4,
  },
  {
    id: 8,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    publish_date: "January 28, 1813",
    price: 7.99,
    image: "./images/book.png",
    isFavorite: false,
    rating: 5,
  },
  {
    id: 9,
    title: "Animal Farm",
    author: "George Orwell",
    publish_date: "August 17, 1945",
    price: 8.99,
    image: "./images/book.png",
    isFavorite: false,
    rating: 5,
  },
  {
    id: 10,
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    publish_date: "September 21, 1937",
    price: 11.99,
    image: "./images/book.png",
    isFavorite: false,
    rating: 5,
  },
  {
    id: 11,
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    publish_date: "July 29, 1954",
    price: 14.99,
    image: "./images/book.png",
    isFavorite: false,
    rating: 5,
  },
  {
    id: 12,
    title: "Brave New World",
    author: "Aldous Huxley",
    publish_date: "June 1, 1932",
    price: 10.99,
    image: "./images/book.png",
    isFavorite: false,
    rating: 4,
  },
  {
    id: 13,
    title: "Frankenstein",
    author: "Mary Shelley",
    publish_date: "January 1, 1818",
    price: 9.99,
    image: "./images/book.png",
    isFavorite: false,
    rating: 5,
  },
  {
    id: 14,
    title: "The Picture of Dorian Gray",
    author: "Oscar Wilde",
    publish_date: "June 20, 1890",
    price: 12.99,
    image: "./images/book.png",
    isFavorite: false,
    rating: 4,
  },
  {
    id: 15,
    title: "Moby-Dick",
    author: "Herman Melville",
    publish_date: "October 18, 1851",
    price: 11.99,
    image: "./images/book.png",
    isFavorite: false,
    rating: 4,
  },
  {
    id: 16,
    title: "Dracula",
    author: "Bram Stoker",
    publish_date: "May 26, 1897",
    price: 8.99,
    image: "./images/book.png",
    isFavorite: false,
    rating: 5,
  },
  {
    id: 17,
    title: "The Adventures of Huckleberry Finn",
    author: "Mark Twain",
    publish_date: "December 10, 1884",
    price: 9.99,
    image: "./images/book.png",
    isFavorite: false,
    rating: 4,
  },
  {
    id: 18,
    title: "The Odyssey",
    author: "Homer",
    publish_date: "8th century BC",
    price: 7.99,
    image: "./images/book.png",
    isFavorite: false,
    rating: 5,
  },
  {
    id: 19,
    title: "The Bell Jar",
    author: "Sylvia Plath",
    publish_date: "January 14, 1963",
    price: 10.99,
    image: "./images/book.png",
    isFavorite: false,
    rating: 4,
  },
  {
    id: 20,
    title: "The Stranger",
    author: "Albert Camus",
    publish_date: "June 1, 1942",
    price: 9.99,
    image: "./images/book.png",
    isFavorite: false,
    rating: 4,
  },
];

const Main = () => {
  const [books, setBooks] = useState(allBooks);
  const handleSortBooks = (sortBy) => {
    let sortedBooks;
    if (sortBy === "name_asc") {
      sortedBooks = books.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortBy === "name_desc") {
      sortedBooks = books.sort((a, b) => b.title.localeCompare(a.title));
    } else if (sortBy === "year_asc") {
      sortedBooks = books.sort(
        (a, b) => a.publish_date.split(", ")[1] - b.publish_date.split(", ")[1]
      );
    } else if (sortBy === "year_desc") {
      sortedBooks = books.sort(
        (a, b) => b.publish_date.split(", ")[1] - a.publish_date.split(", ")[1]
      );
    } else {
      sortedBooks = books;
    }
    setBooks([...sortedBooks]);
  };

  const handleSearchBooks = (bookName) => {
    const filteredBooks = books.filter((book) =>
      book.title.toLowerCase().includes(bookName.toLowerCase())
    );
    setBooks([...filteredBooks]);
  };

  const handleFavourite = (bookId) => {
    setBooks(
      books.map((book) => {
        if (book.id === bookId) {
          return { ...book, isFavorite: !book.isFavorite };
        } else {
          return book;
        }
      })
    );
  };
  return (
    <main className="my-10 lg:my-14">
      <Actions
        onSortBooks={handleSortBooks}
        onSearchBooks={handleSearchBooks}
      />
      <Books books={books} onFav={handleFavourite} />
    </main>
  );
};

export default Main;
