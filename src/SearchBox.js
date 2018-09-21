import React, { Component } from 'react';


class SearchBox extends Component {
  render() {
    return (
      <div  className='pa2' >
      	<input 
      	className='pa3s ba b--green bg-lightest-blue'
      	type='search'
      	 placeholder='search movies'/>
      </div>
    );
  }
}

export default SearchBox;