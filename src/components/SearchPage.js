import React, {Component} from "react";
import BookshelfBooks from "./BookshelfBooks";

class SearchPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            searchQuery: '',
            displayBooks: [],
        }
    }

    onSearch = async (event) => {
        const searchString = event.target.value;
        const displayBooks = await this.props.searchFunction(searchString)
        this.setState((prevState) => ({
            displayBooks: displayBooks
        }))

    }

    render() {
        console.log(this.state.displayBooks)
        return (
            <div>
                <div className="search-books">
                    <div className="search-books-bar">
                        <button className="close-search" onClick={() => {
                            this.props.history.push('/')
                        }}>Close
                        </button>
                        <div className="search-books-input-wrapper">
                            {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                            <input onChange={this.onSearch} type="text" placeholder="Search by title or author"/>

                        </div>
                    </div>
                    <div className="search-books-results">
                        <ol className="books-grid">
                            {this.state.displayBooks && <BookshelfBooks books={this.state.displayBooks}/>}
                        </ol>
                    </div>
                </div>
            </div>
        );
    }
}

export default SearchPage;