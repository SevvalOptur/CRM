import React from 'react';

// Başlık bileşeni
const Card = (props) => {
  // props'tan gelen başlık metnini al
  const { text1, text2 } = props;

  return (
    <div className='card'>
        <h1 className='card__title'>
            {text1}
        </h1>
        <p className='card__contents'>
            {text2}
        </p>
    </div>

  );
}

// 
export default Card;