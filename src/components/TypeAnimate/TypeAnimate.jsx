import React from 'react';
import styled from 'styled-components';

const TypeAnimate = (props) => {
  const { children } = props;
  console.log(children);
  const getScatterWord = (word) => {

    const chars = word.split("");

    return (
        <>
        {chars.map(char => {
            return (<>{ char }</>)
        })}
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
        const children = content.props.children;
        return React.cloneElement(content, { children: processChildrenForScatterfication(children) });
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