import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import {useForm} from 'react-hook-form';

import firebase from '../firebase';
import {useSnackbar} from 'notistack';

const SignInDlg = ({open, onClose}) => {
  
  const {register, handleSubmit} = useForm();
  const { enqueueSnackbar } = useSnackbar();

  const onSubmit = (data) => {
    firebase.doSignIn(data.email, data.password)  
      .then((result) => {
          enqueueSnackbar('You have successfully signed in.', {variant: 'success'});
        onClose(false);
      })
      .catch(e => enqueueSnackbar(e.message, {variant: 'error'}));
  }

  return (
    <Dialog open={open} onClose={onClose}>
      <h1>This is the register dialog</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Email:</label>
        <input ref={register} name="email"/>
        <label>Password:</label>
        <input ref={register} name="password" type="password"/>
        
        <button>Submit</button>
      </form>    
    </Dialog>
  );
};

export default SignInDlg;