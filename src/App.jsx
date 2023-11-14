import "./App.css";
import Header from "./components/UI/Header.jsx";
import { Filters } from "./components/Filters.jsx";
import  {useFilters} from './hooks/useFilters.jsx'
import { Mybooks } from "./components/Mybooks.jsx";
import { useState } from "react";

function App() {
  const {books, handlePagesFilter, handleGenreFilter, filters, setFreeBooks} = useFilters()
  const [myBooks, setMybooks] = useState([])


  const handleClickBook = (e) => {
    setMybooks(prevState => [...prevState, books.find(book => book.book.ISBN === e.target.id)])
    setFreeBooks(prevBooks => prevBooks.filter(({book}) => book.ISBN !== e.target.id))
  }


  const handleDeleteBook = (e) => {
     setMybooks(prevBooks => prevBooks.filter(({book}) => book.ISBN !== e.target.id))
     setFreeBooks(prevState => [...prevState, myBooks.find(book => book.book.ISBN === e.target.id)])
  }

  return (
    <>
      <Header count={myBooks.length} />
      <main>
      {myBooks.length > 0 && <h2> {myBooks.length} en la lista de lectura</h2>}
        <h3>{books.length ? books.length +' libros disponibles' : "Ya no hay libros"} </h3>
        <Filters handleGenreFilter={handleGenreFilter} handlePagesFilter={handlePagesFilter} filters={filters} />
          <ul className="Library">
            {books.map(({book}) => {
              const {cover, title, ISBN} = book
              return (
                <li key={crypto.randomUUID()}  onClick={handleClickBook}>
                  <img src={cover} id={ISBN} alt={title} />
                </li>
              );
            })}
          </ul>
          <Mybooks list={myBooks} handleDeleteBook={handleDeleteBook} />
      </main>
    </>
  );
}

export default App;
