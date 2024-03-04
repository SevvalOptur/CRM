import React from 'react';

const Title = (props) => {
  const { text, fontSize } = props;

  return (
    <h1 className='title' style={{fontSize: fontSize }}>
      {text}
    </h1>
  );
}

export default Title;