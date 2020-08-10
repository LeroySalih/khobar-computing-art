import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import {useForm} from 'react-hook-form';

import firebase from '../firebase';
import {useSnackbar} from 'notistack';

const RegisterDlg = ({open, onClose}) => {
  
  const {register, handleSubmit} = useForm();
  const { enqueueSnackbar } = useSnackbar();

  const onSubmit = (data) => {
    firebase.doCreateUserWithEmailAndPassword(data.email, data.password)
      .then((result) => {
        
        const {uid} = result.user;
        
        delete data.password;
        data.uid = uid;
        firebase.user(uid).set({...data});
        enqueueSnackbar('You have successfully registered.', {variant: 'success'});
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
        <label>First Name:</label>
        <input ref={register} name="firstName"/>
        <label>Family Name:</label>
        <input ref={register} name="familyName"/>
        <button>Submit</button>
      </form>    
    </Dialog>
  );
};

export default RegisterDlg;