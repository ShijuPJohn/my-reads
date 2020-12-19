import React, {Component} from "react";

class SingleBook extends Component {
    render() {
        const {book, updateFunction} = this.props;
        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{
                        width: 128,
                        height: 193,
                        backgroundImage: `url(${book.imageLinks.thumbnail})`
                    }}/>
                    <div className="book-shelf-changer">
                        <select defaultValue={book.shelf} onChange={(event) => {
                            updateFunction(book.id, event.target.value)
                            // console.log(event.target.value)
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
}

export default SingleBook;