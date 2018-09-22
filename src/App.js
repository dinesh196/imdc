import React, { Component } from 'react';

import './App.css';
import Title from './Title.js';
import Card from './Card.js';
import Cardlist from './Cardlist.js';
import SearchBox from './SearchBox.js';

class App extends Component {

  constructor(){
    super()
    this.state={
      movies:[]
    }
  }

  componentDidMount(){
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=d4bc4a02347cd4542c377c6fa9a672b4&language=en-US&page=1')
    .then(response=>{
      return response.json();
    })
    .then(users => {this.setState({movies: users})});

   
  }



  render() {
    return (
      <div className='tc'>
        <Title/>
        <SearchBox/>
        <Cardlist movies={this.state.movies} />
      </div>
    );
  }
}

export default App;
