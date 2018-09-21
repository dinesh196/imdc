import React, { Component } from 'react';
import './Card.css';


class Card extends Component {
  render() {
    return (
      <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5' >
      	<img className='movie' alt='Predator' src='https://m.media-amazon.com/images/M/MV5BMTQ3MDA1OTQyOV5BMl5BanBnXkFtZTgwNTQ5MTczNTE@._V1_.jpg' />
      	<div  >
      		<h2> Predator </h2>
      		<p> Awersome movie </p>
      	</div>      	

      </div>
    );
  }
}

export default Card;
