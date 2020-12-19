import React, {Component} from "react";
import {Link} from "react-router-dom";
import BookshelfBooks from "./BookshelfBooks";

class BookShelves extends Component {
    render() {
        return (
            <div className="list-books-content">
                <div>
                    <div className="bookshelf">
                        <h2 className="bookshelf-title">Currently Reading</h2>
                        <BookshelfBooks/>
                    </div>
                    <div className="bookshelf">
                        <h2 className="bookshelf-title">Want to Read</h2>
                        <BookshelfBooks/>
                    </div>
                    <div className="bookshelf">
                        <h2 className="bookshelf-title">Read</h2>
                        <BookshelfBooks/>
                    </div>

                    <div className="open-search">
                        <Link to={'/search'}>
                            <button onClick={() => this.setState({showSearchPage: true})}>Add a book
                            </button>
                        </Link>

                    </div>
                </div>
                )}
            </div>
        );
    }
}

export default BookShelves;