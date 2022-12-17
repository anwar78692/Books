
import { useState } from "react";

function BookCreate({onCreate}) {
    const [title, setTitle] = useState([])

    const handleChange = (event) => {
        setTitle(event.target.value)
    }
    const handleSubmit = (event) =>{
        event.preventDefault();
        onCreate(title);

    }
    return (
        <div className="book-create">
            <h3>Add a book</h3>
            <form onSubmit={handleSubmit}>
                <label  className = "title" for = "title">Title</label>
                <input className="input" value={title} onChange = {handleChange} placeholder = "Please Enter Title of The Book" required/>
                <button className="button">Create</button>
            </form>



        </div>
    )
}

export default BookCreate;