import React from 'react';
import styled from 'styled-components';
import TypeAnimate from './TypeAnimate';

export default {
  title: 'TypeAnimate',
  parameters: {
    layout: 'fullscreen'
  }
};

const Percentage = styled.span`
  font-style: italic;
`

export const Default = () => {
  return (
    <div style={{width: '100%', height: '100vh'}}>
       <TypeAnimate>
          UP TO <Percentage>80%</Percentage> OFF 
       </TypeAnimate>
    </div>
  );
}