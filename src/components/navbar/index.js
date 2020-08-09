import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';

const Navbar = styled.div`
  background-color: '#f00000';
`;
export default ({setDrawer}) => {
  return (<Navbar>
    <Button onClick={() => setDrawer && setDrawer(true)}>Drawer</Button>
    <Link to='/'>Home</Link>
    <Link to='/sketch'>Sketch</Link>
  </Navbar>)
}