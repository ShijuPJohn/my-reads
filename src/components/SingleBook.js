import React from "react";

const SingleBook = (props) => {
    const {book, updateFunction} = props;

    return (
        <div className="book">
            <div className="book-top">
                <div className="book-cover" style={{
                    width: 128,
                    height: 193,
                    backgroundImage: (Object.keys(book).indexOf('imageLinks') > -1)
                        && (Object.keys(book.imageLinks).indexOf('thumbnail') > -1)
                        && `url(${book.imageLinks.thumbnail})`
                }}/>
                <div className="book-shelf-changer">
                    <select defaultValue={book.shelf ? book.shelf : 'none'} onChange={(event) => {
                        updateFunction(book.id, event.target.value)
                    }}>
                        <option value="move" disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading
                        </option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                    </select>
                </div>
            </div>
            <div className="book-title">{`${book.title}`}</div>
            <div className="book-authors">{`${book.authors}`}</div>
        </div>
    );
}

export default SingleBook;