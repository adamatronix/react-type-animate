import React from 'react';
import styled from 'styled-components';

const TypeAnimate = (props) => {
  const { children } = props;
  const getScatterWord = (word) => {

    const chars = word.split("");

    return (
        <>
        <span class="word"> 
            {chars.map(char => {
                return (<>{ char }</>)
            })}
        </span>
        <span> </span>
        </>
    )

  } 

  const getScatterElements = (quote) => {
    const words = quote.split(" ");

    const elements =  words.map((word,i) => {
        return (
            <>{getScatterWord(word)}</>
        )
    });

    return elements;
  }

  const processChildrenForScatterfication = (content) => {
    if (typeof content === 'string' || content instanceof String) {
      return getScatterElements(content);
    } else {
      if(content.props) {
        return processChildrenForScatterfication(content.props.children);
      } else {
        return content.map(child => {
          return processChildrenForScatterfication(child);
        });
      }
    }
  }

  return (
    <div>{ processChildrenForScatterfication(children) }</div>
  )
}

export default TypeAnimate;