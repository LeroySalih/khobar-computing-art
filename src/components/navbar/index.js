import React, {useState} from 'react';
import styled from 'styled-components';
import {Link, useLocation} from 'react-router-dom';
import Button from '@material-ui/core/Button';


import RegisterDialog from './register.dlg';
import SignInDialog from './signin.dlg';
import DisplayUserSignIn from './display.user.signin';

import firebase from '../firebase';

const Navbar = styled.div`
min-height: 40px;
background: rgb(1,141,208);
background: linear-gradient(90deg, rgba(1,141,208,1) 0%, rgba(252,0,255,1) 49%, rgba(252,0,255,0) 100%);
  display: flex;
  padding: 20px;

`;

const DrawerContainer = styled.div`
  margin-right: 30px;
  display: flex;
  flex-direction: row;
`

const Links = styled.div`
  flex: 1;
`



const LinkText = styled(Link)`
  color: white;
  margin-left : 10px;
  margin-right : 10px;
  text-decoration: none;

  :hover {
    border-bottom: solid white 2px;
  }
`
export default ({setDrawer, user}) => {

  const {pathname} = useLocation();

  const [registerOpen, setRegisterOpen] = useState(false);
  const [signInOpen, setSignInOpen] = useState(false);

  const handleRegisterClose = () => setRegisterOpen(false);
  const handleSignInClose = () => setSignInOpen(false);



  const handleRegister = () => {
    setRegisterOpen(true);
  }

  const handleSignIn = () => {
    setSignInOpen(true);
  }

  const handleSignOut = () => {
    firebase.doSignOut();
  }

  return (
  <Navbar>
    <RegisterDialog open={registerOpen} onClose={handleRegisterClose}/>
    <SignInDialog open={signInOpen} onClose={handleSignInClose}/>
    <Links>
      <LinkText to='/'>Home</LinkText>
      {user && <LinkText to={`/mysketches`}>My Sketches</LinkText>}
      
    </Links>
    <DrawerContainer>
      <DisplayUserSignIn user={user} onSignIn={handleSignIn} onRegister={handleRegister} onSignOut={handleSignOut}/>
      {user && (pathname === '/sketchpad') && (<Button onClick={()=> setDrawer(true)}>Tasks</Button>)}
    </DrawerContainer>
    
  </Navbar>)
}
