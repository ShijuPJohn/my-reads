import React from "react";
import {Link} from "react-router-dom";
import BookshelfBooks from "./BookshelfBooks";

const BookShelves = (props) => {
    const {books, updateFunction} = props;
    const shelfObjectArray = [
        {
            title: 'Currently Reading',
            shelf: 'currentlyReading'
        },
        {
            title: 'Want to Read',
            shelf: 'wantToRead'
        },
        {
            title: 'Read',
            shelf: 'read'
        },

    ]
    return (
        <div className="list-books-content">
            <div>
                {shelfObjectArray.map((item) => {
                    return (
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">{item.title}</h2>
                            <BookshelfBooks books={books.filter(book => book.shelf === item.shelf)}
                                            updateFunction={updateFunction}/>
                        </div>
                    );
                })}

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