import React from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { useState } from 'react';

const { forwardRef, useRef, useImperativeHandle } = React;

function AlertHandler(props) {
  const { message, alert, setAlert } = props;

  // const Alert = React.forwardRef(function Alert(props, ref) {
  //   return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  // });

  const handleCloseAlert = () => {
    {
      setAlert(false);
      return;
    }
  };

  setTimeout(() => {
    setAlert(false);
  }, 2000);

  return (
    <div>
      <Snackbar open={alert} autoHideDuration={6000} onClose={handleCloseAlert}>
        <Alert variant="filled" severity="success">
          {message}
        </Alert>
      </Snackbar>
    </div>
  );
}

export default AlertHandler;
