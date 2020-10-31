import React from 'react';
import Card from '../Card';
import './styles.scss';

const App = () => {

  const cards = [
    {
      id: 1,
      subtitle: 'с фуа-гра',
      description: 'Печень утки разварная с артишоками.',
      portions: 10,
      mouses: 1,
      weight: '0,5'
    },
    {
      id: 2,
      subtitle: 'с рыбой',
      description: 'Головы щучьи с чесноком да свежайшая сёмгушка.',
      portions: 40,
      mouses: 2,
      weight: '2',
      checked: true
    },
    {
      id: 3,
      subtitle: 'с курой',
      description: 'Филе из цыплят с трюфелями в бульоне.',
      portions: 100,
      mouses: 5,
      weight: '5',
      disabled: true
    }
  ];

  return (
    <div className="app">
      <div className="app__container">
        <h1 className="app__heading">Ты сегодня покормил кота?</h1>
        {cards.map(card => (
          <div className="app__card" key={card.id}>
            <Card {...card}/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
