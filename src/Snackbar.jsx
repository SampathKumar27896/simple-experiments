import Snackbar from '@mui/material/Snackbar';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    isLoading,
    selectMessage,
    isMessageOpen,
    updateIsLoading,
    updateIsMessageOpen,
    updateMessage,
  } from './app/AppSlice';
const AppSnackBar = () => {
    const dispatch = useDispatch();
    const handleClose = () => {
        dispatch(updateIsMessageOpen(false));
        dispatch(updateMessage(''));
    }
    return (
        <Snackbar
        open={useSelector(isMessageOpen)}
        autoHideDuration={10000}
        onClose={handleClose}
        message={useSelector(selectMessage)}
        
      />
    )
}
export default AppSnackBar;