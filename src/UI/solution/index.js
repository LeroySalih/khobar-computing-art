import React from 'react';
import styled from 'styled-components';


export const SolutionHeading = styled.div`
  background-color: #00ee00;
  padding: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;

  font-family: 'Open Sans'

`

export const SolutionBody = styled.div`
  padding: 10px;
  font-family: 'Open Sans';
  font-size: 0.9rem;
`


export const Solution = styled.div`
  border: solid 1px #00ee00;
  border-radius: 10px;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
  margin-bottom: 20px;
`  
export default ({children}) => {
  return (
    <Solution>
      {children}
    </Solution>
  );
}