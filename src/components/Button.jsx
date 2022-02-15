import React from 'react';
import * as style from './ModalContainar/Modal_style.css';
import Button from '@mui/material/Button';
import { withStyles } from '@material-ui/core/styles';

function Btn(props) {
  const { label, color, temp, dataHandler, data } = props;
  const CustomButton = withStyles({
    root: {
      fontFamily: 'DM Sans',
      padding: 0,
      width: '100%',
      height: '100%',
      borderRadius: '8.78px',
      textAlign: 'center',
      backgroundColor: `${color}`,
      // backgroundColor: '#262626',
      fontSize: 11,
      border: 'none',
      color: '#fff!important',
      fontWeight: '300',
      cursor: 'pointer',
      textDecoration: 'none',
      textTransform: 'none',
      transition: 'all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s',
      '&:hover': {
        background: `${color}`
      }
    }
  })((props) => <Button {...props} />);

  return (
    <CustomButton
      varient="contained"
      disabled={temp}
      className={style.ButtonDisabled}
      onClick={() => {
        dataHandler(data);
      }}
    >
      {label}
    </CustomButton>
  );
}

export default Btn;
