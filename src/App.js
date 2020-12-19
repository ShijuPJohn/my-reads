import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import {Link, Route} from "react-router-dom";
import SearchPage from "./components/SearchPage";
import {get, getAll} from "./BooksAPI";
import BookShelves from "./components/BookShelves";

class BooksApp extends React.Component {
    state = {
        /**
         * TODO: Instead of using this state variable to keep track of which page
         * we're on, use the URL in the browser's address bar. This will ensure that
         * users can use the browser's back and forward buttons to navigate between
         * pages, as well as provide a good URL they can bookmark and share.
         */
        showSearchPage: false
    }

    componentDidMount() {
        getAll().then(response => {
            console.log(response)
        })
        get('nggnmAEACAAJ').then(response => {
            console.log(response)
        })
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
                            <BookShelves/>
                        )}/>
                        <Route path={'/search'} exact component={SearchPage}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default BooksApp
