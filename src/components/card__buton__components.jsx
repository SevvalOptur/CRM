import React, { useState } from 'react';

const CardButon = (props) => {
  const {icon, newIcon, disabled, active} = props;
  const [isActive, setIsActive] = useState(active);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  let buttonClass = 'card__buton';

  if (disabled) {
    buttonClass += ' disabled';
  }

  if (active) {
    buttonClass += ' active';
  }
  return (
    <div className={buttonClass} disabled={disabled} onClick={handleClick}>
        <button className='card__buton__button'><span className="card__buton__icon">{isActive ? newIcon : icon}</span></button>
    </div>
  );
};

export default CardButon;

