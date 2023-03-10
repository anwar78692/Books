import axios from 'axios';
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import { useState , useEffect  } from "react";
function App()
{
    const [books, setBooks] = useState([]);

    const fetchBooks = async () => {
        const response = await axios.get('http:localhost:3001/books'); 
            setBooks(response.data)
        }
    useEffect(() => {
        fetchBooks()
    }, []);

    const editBookById = (id, newTitle) =>{
        const updatedBooks = books.map((book) => {
            if(book.id === id){
                return {...book, title:newTitle}
            }
            return book;
        });
        setBooks(updatedBooks)
    }

    const deleteBookById = (id) => {
        const updatedBooks = books.filter((book) => {
            return book.id !== id;
        });
        setBooks(updatedBooks);
    }

    const createBook =  async (title) => {
       const response = await axios.post('http://localhost:3001/books', {
            title
        });

        console.log(response);
        const updatedBooks = [
            ...books,
            response.data
        ]
        setBooks(updatedBooks)
    }
    return(
        <div className="app">
            <h1 className="header">Reading List :- </h1>
            <BookList books = {books} onEdit = {editBookById} onDelete = {deleteBookById}  />
        <BookCreate onCreate = {createBook} />
</div>

    )
}

export default App;