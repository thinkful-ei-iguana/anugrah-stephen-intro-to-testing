import React from 'react';
import ReactDOM from 'react-dom';
import './Card.css';

const Card = (props) => {
  return (
    <div className="Card">
      <button type="button">delete</button>
      <h3>{props.title}</h3>
      <p>{props.content}</p>
    </div>
  );
}

export default Card;