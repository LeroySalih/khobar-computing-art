import React from 'react';
import styled from 'styled-components';

const TabPanel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
`
export default ({index, value, children}) => {
  return (index === value) ? (<TabPanel>{children}</TabPanel>) : (<></>)
}