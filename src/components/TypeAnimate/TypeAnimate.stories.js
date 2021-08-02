import React from 'react';
import TypeAnimate from './TypeAnimate';

export default {
  title: 'TypeAnimate',
  parameters: {
    layout: 'fullscreen'
  }
};

export const Default = () => {
  return (
    <div style={{width: '100%', height: '100vh'}}>
       <TypeAnimate>
          UP TO <span>80%</span> OFF 
       </TypeAnimate>
    </div>
  );
}