import { useState } from 'react';
import '../../../src/index.css'
function Bookshelf(){
    const [books, setBooks] = useState([{ title: 'Fourth Wing', author: 'Rebecca Yarros' },
        { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' },])
    const [newBook, setNewBook] = useState({title:'', author:''})

    function handleInputChange(event){
        setNewBook({...newBook, [event.target.name]: event.target.value})


    }

    function handleSubmit(event){
        event.preventDefault()
        setBooks([...books, newBook])
        setNewBook({
            title: "",
            author:""
        })

    }

    return(
        <>
        <div className="bookshelfDiv">
          <div className="formDiv">
            <h3>Add a Book</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Title</label>
                <input onChange={handleInputChange} type="text" id='title' name='title' value={newBook.title}/>
                <label htmlFor="author">Author</label>
                <input onChange={handleInputChange} type="text" id='author' name='author' value={newBook.author}/>
                <button>Add Book</button>
            </form>
          </div>
          <div className="bookCardsDiv">
            {books.map((oneBook, i) => {
                return(
                <div className='bookCard' key={i}>
                <p><strong>{oneBook.title}</strong> by  <strong>{oneBook.author}</strong></p>
                </div>
                )
            })}
            </div>

          </div>
        </>
        )
        
}


export default Bookshelf