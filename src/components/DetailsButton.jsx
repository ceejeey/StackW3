import React from 'react';

import Button from '@mui/material/Button';
import { withStyles } from '@material-ui/core/styles';
import { textTransform } from '@mui/system';

function DetailsButton() {
  const CustomButton = withStyles({
    root: {
      fontFamily: 'DM Sans',
      width: '100%',
      height: '100%',
      borderRadius: '8.78px',
      textAlign: 'center',
      backgroundColor: '#262626',
      fontSize: 11,
      border: 'none',
      color: '#e2e2e2',
      fontWeight: '300',
      cursor: 'pointer',
      textDecoration: 'none',
      textTransform: 'none',
      transition: 'all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s',
      '&:hover': {
        background: '#262626'
      }
    }
  })((props) => <Button {...props} />);

  return <CustomButton>More Details</CustomButton>;
}

export default DetailsButton;
