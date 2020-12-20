import React from "react";
import {Link} from "react-router-dom";
import BookshelfBooks from "./BookshelfBooks";

const BookShelves = (props) => {
    const {books, updateFunction} = props;
    return (
        <div className="list-books-content">
            <div>
                <div className="bookshelf">
                    <h2 className="bookshelf-title">Currently Reading</h2>
                    <BookshelfBooks books={books.filter(book => book.shelf === 'currentlyReading')}
                                    updateFunction={updateFunction}/>
                </div>
                <div className="bookshelf">
                    <h2 className="bookshelf-title">Want to Read</h2>
                    <BookshelfBooks books={books.filter(book => book.shelf === 'wantToRead')}
                                    updateFunction={updateFunction}/>
                </div>
                <div className="bookshelf">
                    <h2 className="bookshelf-title">Read</h2>
                    <BookshelfBooks books={books.filter(book => book.shelf === 'read')}
                                    updateFunction={updateFunction}/>
                </div>

                <div className="open-search">
                    <Link to={'/search'}>
                        <button>Add a book</button>
                    </Link>
                </div>

            </div>
        </div>
    );
}

export default BookShelves;