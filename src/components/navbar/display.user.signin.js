import React from 'react';
import styled from 'styled-components';

import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';

const UserSignIn = styled.div`
  display: flex;
  flex-direction: row;
`
export default ({user, onSignIn, onRegister, onSignOut}) => {

  if (user === undefined){
    return <span>Checking</span>
  }

  if (user === null){
    return (<>
    <Button onClick={onSignIn}>Sign In</Button>
    <Button onClick={onRegister}>Register</Button>
  </>);
  }

  if (user) {
    return (<UserSignIn>
    <Avatar>{user.firstName[0]}{user.familyName[0]}</Avatar>
    <Button onClick={() => onSignOut()}>SignOut</Button>
    </UserSignIn>
    )
  }
}