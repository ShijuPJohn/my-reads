import React, {Component} from "react";
import SingleBook from "./SingleBook";

class BookshelfBooks extends Component {
    render() {
        const {updateFunction} = this.props;
        return (
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {this.props.books.map(book => (
                        <li key={book.id}><SingleBook book={book} updateFunction={updateFunction}/></li>))}
                </ol>
            </div>
        );
    }
}

export default BookshelfBooks;