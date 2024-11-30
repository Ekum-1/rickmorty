import React from "react";

const Pagination = ({ onPageChange }) => {
    return (
			<div>
				<button className="bg-washed-red br-pill pa3 fw6 ma1" 
					onClick={() => onPageChange(-1)}>Previous Page</button>
				<button className="bg-washed-red br-pill pa3 fw6 ma1" 
					onClick={() => onPageChange(1)}>Next Page</button>
			</div>
   );
}

export default Pagination;