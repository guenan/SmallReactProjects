import {createContext, useState, useCallback} from 'react';
import axios from "axios";

const BooksContext = createContext();

function Provider({children}){

    const [books, setBooks] = useState([]);

    /* useCallback function with empty second parameter array, allows react to know that the
     arrow function calls inside of it should have the same reference when we pass from
      a render to another */
    const fetchBooks = useCallback(async () => {
        const response = await axios.get("http://localhost:3001/books");
        setBooks(response.data);
    }, []);

   

    const deleteBookById = async (id) => {

        await axios.delete(`http://localhost:3001/books/${id}`);

        const updatedBooks = books.filter((book) => {
            return book.id !== id;
        });
        setBooks(updatedBooks);
    };

    const editBookById = async (id, newtitle) => {

        const response = await axios.put(`http://localhost:3001/books/${id}`, {
            title: newtitle,
        });

        const updatedBooks = books.map((book) => {
            if(book.id === id){
                return {...book, ...response.data};
            }
            return book;
        });

        setBooks(updatedBooks);
    };

    const createBook = async (title) => {

        const response = await axios.post("http://localhost:3001/books", {
            title,
        });

        const updatedBook = [
            ...books, 
           response.data
        ];
        setBooks(updatedBook); 

    };

    const valueToShare = {
        books,
        deleteBookById,
        editBookById,
        createBook,
        fetchBooks
    };

    return (<BooksContext.Provider value={valueToShare}>
        {children}
    </BooksContext.Provider>);
}

export {Provider};
export default BooksContext;