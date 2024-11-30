import React from "react";

const Character = ({ name, status, species, id}) => {
	return (
			<div className="tc bg-washed-green dib br3 pa3 ma2 grow shadow-5 hide-child br2 cover bg-center">
				<img alt='cartoon' src={`https://rickandmortyapi.com/api/character/avatar/${id}.jpeg?200x200`} />
				<div>
					<h2>{name}</h2>
					<p className="gray dtc v-mid child bg-light-yellow o-05 pa5">{species}</p>
					<p className="white dtc v-mid child bg-black-40 pa5">{status}</p>
				</div>
			</div>
	);
}

export default Character;