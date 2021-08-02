import React from 'react';
import styled from 'styled-components';
import TypeAnimate from './TypeAnimate';

export default {
  title: 'TypeAnimate',
  parameters: {
    layout: 'fullscreen'
  }
};

const MainText = styled.h1`
  position: relative;
  font-size: 55px;
  font-weight: normal;
`

const Percentage = styled.span`
  font-style: italic;
`

export const Default = () => {
  return (
    <div style={{width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
       <TypeAnimate>
          <MainText>UP TO <Percentage>80%</Percentage> OFF</MainText>
       </TypeAnimate>
    </div>
  );
}