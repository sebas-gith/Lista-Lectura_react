import  {useEffect, useState} from 'react'
import {library} from "../books.json";

export const useFilters = () => {
    const [books, setBooks] = useState(library);
    const [freeBooks, setFreeBooks] = useState(library)
    const [filters, setFilters] = useState({minPages: 36, genre: 'all'})
  
    useEffect(() => {
      setBooks(freeBooks.filter((books) => {
        const {book} = books 
        return  filters.genre === 'all' &&  book.pages >= filters.minPages || (book.genre === filters.genre && book.pages >= filters.minPages) 
      }))
    }, [filters, freeBooks])
  
    const handlePagesFilter = (e) => {
      setFilters(prevState => (
        {
          ...prevState,
          minPages: e.target.value
        }
        ));
    };
    
    const handleGenreFilter = (e) => {
      setFilters(prevState => (
        {
          ...prevState,
          genre: e.target.value
        }
      ))
    };

    return {handleGenreFilter, handlePagesFilter, books, filters, setFreeBooks}
}
