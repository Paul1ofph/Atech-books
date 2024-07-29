import React from "react";
import { useState, useEffect } from "react";
import BookListing from "./bookListing";
import Spinner from "./Spinner";

const BookListings = ({ isHome = false }) => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [records, setRecords] = useState(books);

  useEffect(() => {
    const fetchBooks = async () => {
      const apiUrl = isHome ? "/api/books?_limit=3" : "/api/books";
      try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        setBooks(data);
        setRecords(data);
      } catch (error) {
        console.log("Error fetching data", error);
      } finally {
        setLoading(false);
      }
    };
    fetchBooks();
  }, []);

  const Filter = (event) => {
    setRecords(
      books.filter((f) => f.title.toLowerCase().includes(event.target.value))
    );
  };
  return (
    <>
      <section className="bg-blue-50 px-4 py-10">
        <div className="container-xl lg:container m-auto">
          <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
            {isHome ? "Recent Books" : "Browse Books"}
          </h2>
          {!isHome && (
            <div className="input flex flex-wrap items-center justify-center">
              <input
                type="text"
                className="form-control p-4 w-1/2 mb-4 rounded-md"
                onChange={Filter}
                placeholder="search..."
              />
            </div>
          )}

          {loading ? (
            <Spinner loading={loading} />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {records.map((book) => (
                <BookListing key={book.id} book={book} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default BookListings;
