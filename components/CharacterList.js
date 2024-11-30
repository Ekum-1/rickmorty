import React from 'react';
import Character from './Character';

const CharacterList = ({ characters }) => {
  return (
    <div>
      {
        characters.map((character) => {
          return (
            <Character
              key={character.id}
              id={character.id}
              name={character.name}
              species={character.species}
              status={character.status}
            />
          );
        })
      }
    </div>
  );
}

export default CharacterList