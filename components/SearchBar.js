import React from "react";

const SearchBar = ({ searchChange }) => {
   return (
     <div className="pa2">
			<input
			className="pa3 ba b--green bg-lightest-blue"
			type="search" placeholder="search characters"
			onChange={searchChange}
			/>
     </div>
   )
}

export default SearchBar;