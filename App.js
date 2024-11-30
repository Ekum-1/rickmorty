import React, { Component } from 'react';
import CharacterList from './components/CharacterList'
import SearchBar from './components/SearchBar'
import Pagination from './components/Pagination';


class App extends Component {
  constructor () {
    super ()
    this.state = {
      characters: [],
      searchfield: '',
      pageNumber: 1
    }
  }
  
  componentDidMount() {
    this.fetchCharacters();
  }

  async fetchCharacters () {
    try {
      const { pageNumber } = this.state;
      const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${pageNumber}`);
      const data = await response.json();
      this.setState({ characters: data.results });
    } catch (error) {
      console.log('oops, there is a problem', error);
    }
  }

  changePage = (page) => {
    this.setState(prevState => ({pageNumber: prevState.pageNumber + page}), 
    () => {
      this.fetchCharacters();
      }
    )
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
  }

  render () {
    const { characters, searchfield } = this.state
    const filteredCharacters = characters.filter(character => {
      return character.name.toLowerCase().includes(searchfield.toLowerCase())
    })
    return (
    <div className= "App w-100 tc">
    <h1 className= "tc">Characters</h1>
    <SearchBar searchChange={this.onSearchChange}/>
    <CharacterList characters={filteredCharacters}/>
    <Pagination onPageChange={this.changePage}/>
    </div>
    );
  }
}

export default App;
