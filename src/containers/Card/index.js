import React, { useState } from 'react';
import transChoice from '../../utils/transChoice';
import './styles.scss';

const Card = (props) => {
  const {subtitle, description, portions, mouses, weight, checked, disabled} = props;
  const [isChecked, toggleCheck] = useState(!!checked);
  const [isMouseLeave, toggleMouseLeave] = useState(false);

  const handleToggleCheck = () => {
    if (!disabled) {
      toggleCheck(!isChecked);
    }
  };

  const handleMouseLeave = () => {
    if (!disabled && isChecked) {
      toggleMouseLeave(true);
    }
  };

  const handleMouseEnter = () => {
    if (!disabled) {
      toggleMouseLeave(false);
    }
  };

  return (
    <div className="card">
      <div className={'card__box' + (isChecked ? ' is-active' : '') + (disabled ? ' is-disabled' : '')}
           onClick={handleToggleCheck}
           onMouseEnter={handleMouseEnter}
           onMouseLeave={handleMouseLeave}
           tabIndex={0}
      >
        <div className="card__container">
          {isMouseLeave ? (
            <div className="card__description card__description--secondary">Котэ не одобряет?</div>
          ) : (
            <div className="card__description">Сказочное заморское яство</div>
          )}
          <h2 className="card__title">Нямушка</h2>
          <h3 className="card__subtitle">{subtitle}</h3>
          <div className="card__text text-tiny">
            <div><b>{portions}</b> {transChoice(portions, ['порция', 'порции', 'порций'])}</div>
            <div>{mouses > 1 && <b>{mouses}</b>} {transChoice(mouses, ['мышь в подарок', 'мыши в подарок', 'мышей в подарок'])}</div>
            {mouses >= 5 && <div>заказчик доволен</div>}
          </div>
        </div>
        <div className="card__badge">
          <span className="card__text-weight">{weight}</span>
          <span className="card__text-unit">кг</span>
        </div>
      </div>
      {disabled ? (
        <p className="text-small card__subtext card__subtext--disabled">
          Печалька, {subtitle} закончился.
        </p>
      ) : isChecked ? (
        <p className="text-small card__subtext">
          {description}
        </p>
      ) :(
        <p className="text-small card__subtext">
          Чего сидишь? Порадуй котэ, <a role="button" onClick={handleToggleCheck} tabIndex={0}>купи</a>.
        </p>
      )}
    </div>
  );
};

export default Card;
