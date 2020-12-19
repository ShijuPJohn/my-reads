import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import {Route} from "react-router-dom";
import SearchPage from "./components/SearchPage";
import {getAll, search, update} from "./BooksAPI";
import BookShelves from "./components/BookShelves";

class BooksApp extends React.Component {
    constructor(props) {
        super(props);
        this.updateBook = this.updateBook.bind(this);
        this.state = {
            books: []
        }
    }

    async searchBooks(query) {
        return await search(query).then((response) => {
            return response
        })
    }

    componentDidMount() {
        getAll().then(response => {
            this.setState(prevState => ({
                books: response
            }))
        });
    }

    updateBook(bookId, shelf) {
        update({id: bookId}, shelf);
        const books = [...this.state.books];
        (books.find((item) => item.id === bookId)).shelf = shelf;
        this.setState(_ => ({
            books: books
        }));

    }


    render() {
        return (
            <div>
                <div className="app">
                    <div className="list-books">
                        <div className="list-books-title">
                            <h1>MyReads</h1>
                        </div>
                        <Route path={'/'} exact render={() => (
                            <BookShelves books={this.state.books} updateFunction={this.updateBook}/>
                        )}/>
                        <Route path={'/search'} exact render={() => (
                            <SearchPage books={this.state.books} updateFunction={this.updateBook}
                                        searchFunction={this.searchBooks}/>
                        )}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default BooksApp;
