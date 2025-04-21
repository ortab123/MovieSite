 import React from 'react';
 import "./SearchResult.css";
 
 export const SearchResult = ({result}) => {
   return (
     <div className="search-result" onClick={(event) => alert(`You clicked on ${result.title}`)}>
     {result.title}
     </div>
   )
 }
 