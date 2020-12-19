import React, {Component} from "react";
import SingleBook from "./SingleBook";

class BookshelfBooks extends Component {
    render() {
        return (
            <div className="bookshelf-books">
                <ol className="books-grid">
                    <li>
                        <SingleBook/>
                    </li>
                    <li>
                        <SingleBook/>
                    </li>
                </ol>
            </div>
        );
    }
}

export default BookshelfBooks;