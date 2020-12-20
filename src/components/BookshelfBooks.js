import React from "react";
import SingleBook from "./SingleBook";

const BookshelfBooks = (props) => {
    const {books, updateFunction} = props;
    return (
        <div className="bookshelf-books">
            <ol className="books-grid">
                {books.map(book => (
                    <li key={book.id}><SingleBook book={book} updateFunction={updateFunction}/></li>))}
            </ol>
        </div>
    );
}

export default BookshelfBooks;