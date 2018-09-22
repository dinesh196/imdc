import React, { Component } from 'react';
import Card from './Card.js';

/*class Cardlist extends Component {
  render() {
    return (
      <div >
      	<Card id='1' name='Predator' description='This is an awersome movie'  />
        <Card id='2' name='Predator' description='This is an awersome movie'  />
        <Card id='3' name='Predator' description='This is an awersome movie'  />
        <Card id='4' name='Predator' description='This is an awersome movie'  />

      </div>
    );
  }
}
*/
const Cardlist = ({ movies }) => {
  return (
    <div>
      {
        movies.map((movie, i) => {
          return (
            <Card
              
              id={movie[i].id}
              title={movie[i].title}
              /*email={robots[i].email}*/
              />
          );
        })
      }
    </div>
  );
}
export default Cardlist;
