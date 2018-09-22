import React, { Component } from 'react';
import './Card.css';


/*class Card extends Component {
  render() {

    return (
      <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5' >
      	<img className='movie' alt='Predator' src='https://m.media-amazon.com/images/M/MV5BMTQ3MDA1OTQyOV5BMl5BanBnXkFtZTgwNTQ5MTczNTE@._V1_.jpg' />
      	<div  >
      		<h2> {this.props.name}  </h2>
      		<p> {this.props.description} </p>
      	</div>      	

      </div>
    );
  }
}
*/

const Card = ({ id , title }) => {
  return (
    <div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>
      {/*<img alt='movie' src={`https://robohash.org/${id}?size=200x200`} />*/}
      <div>
        <h2>{title}</h2>
        <p>{id}</p>
      </div>
    </div>
  );
}
export default Card;
