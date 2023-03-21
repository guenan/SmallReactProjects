import {useEffect, useContext } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import BooksContext from "./context/books";


function App() {

     const {fetchBooks} = useContext(BooksContext);
    /* this fuction is called when the component is rendered for the first time and will be
     called again when data inside second array parameter change */
    useEffect(() => {
        fetchBooks();
    }, [fetchBooks]); 

    
    return <div className="app">
        <h1>Reading List</h1>
                <BookList />
                <BookCreate />
           </div>
}

export default App;