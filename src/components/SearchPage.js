import React, {Component} from "react";
import BookshelfBooks from "./BookshelfBooks";
import {Link} from "react-router-dom";

class SearchPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            displayBooks: [],
        }
    }

    onSearch = async (event) => {
        const searchString = event.target.value;
        let displayBooks = []
        if (searchString.length !== 0) {
            displayBooks = await this.props.searchFunction(searchString)
        }
        if (Array.isArray(displayBooks)) {
            displayBooks.forEach((itemFetched, indexF) => {
                this.props.books.forEach((itemState) => {
                    if (itemState.id === itemFetched.id) {
                        displayBooks[indexF] = itemState

                    }
                })
            })
        }
        this.setState((_) => ({
            displayBooks: displayBooks
        }))
    }

    render() {
        return (
            <div>
                <div className="search-books">
                    <div className="search-books-bar">
                        <Link to={'/'}>
                            <button className="close-search">Close
                            </button>
                        </Link>
                        <div className="search-books-input-wrapper">

                            <input onChange={this.onSearch} type="text" placeholder="Search by title or author"/>

                        </div>
                    </div>
                    <div className="search-books-results">
                        <ol className="books-grid">
                            {this.state.displayBooks && Array.isArray(this.state.displayBooks) &&
                            <BookshelfBooks books={this.state.displayBooks}
                                            updateFunction={this.props.updateFunction}/>}
                        </ol>
                    </div>
                </div>
            </div>
        );
    }
}

export default SearchPage;