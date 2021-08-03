import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import AnimationManager from '../../utils/AnimationManager';

const TypeAnimate = (props) => {
  const { children } = props;
  const charRefs = useRef([]);

  useEffect(() => {
    const manager = new AnimationManager(charRefs.current);
    manager.startEngine();
  }, []);

  const getScatterWord = (word) => {

    const chars = word.split("");

    return (
        <>
        {chars.map(char => {
            return (<span ref={el => charRefs.current.push(el)}>{ char }</span>)
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
    <>{ processChildrenForScatterfication(children) }</>
  )
}

export default TypeAnimate;