import React from 'react';
import {ColoredUserpic} from './components/coloredUserpic/ColoredUserpic';
import image from './assets/images/123.jpg'
import './App.css'

export const App = () => {
  return (
    <div className='container_card'>
      <ColoredUserpic
          src={image}
          size={300}
          margin={7}
          backgroundColor='gold'
          colors={['silver', 'red']}
          hoverColors={['yellow', 'purple']}
          colorWidth={20}
      />
    </div>
  );
}
