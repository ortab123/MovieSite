import React, {useState} from 'react'
import { FaSearch } from 'react-icons/fa'
import "./SearchBar.css";

export const SearchBar = ({setResults, movies, setFilteredMovies}) => {
    const[input,setInput] = useState("")

    const handleChange = (value) => {
        setInput(value)
        // if(!input){
        //     setFilteredMovies()
        // }
        console.log(value)

        setFilteredMovies(movies.filter(movie => movie.title.toLowerCase().includes(value)))
    }

  return (
    <div className="input-wrapper">
        <FaSearch id="search-icon" />
        <input placeholder="Type to search..."
         value={input}
         onChange={(event) => handleChange(event.target.value)}/>
        </div>
  )
}
