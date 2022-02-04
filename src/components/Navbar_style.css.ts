import zIndex from '@mui/material/styles/zIndex';
import { style } from '@vanilla-extract/css';

export const AppHeader = style({
  '@media': {
    'screen and (min-width: 768px)': {
      width: '100%',
      margin: '5% 0px'
    }
  },
  height: '100%',
  display: 'flex',
  backgroundColor: '#000',
  justifyContent: 'flex-end'
});

export const Navmenu = style({
  '@media': {
    'screen and (min-width: 768px)': {
      width: '40%',
      display: 'flex',
      justifyContent: 'space-evenly',
      height: '100%',
      alignItems: 'center',
      margin: 'auto'
    }
  },
  display: 'none'
});

export const toggleBar = style({
  '@media': {
    'screen and (min-width: 768px)': {
      display: 'none'
    }
  },
  width: 'calc(100% - 30px)',
  position: 'fixed',
  padding: '20px',
  background: '#000',
  zIndex: 2,
  display: 'flex',
  justifyContent: 'flex-end'
});

export const MenuIcon = style({
  '@media': {
    'screen and (min-width: 768px)': {
      display: 'none'
    }
  },

  width: '100%',
  transition: 'all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s'
});

export const MenuIconOpen = style({
  '@media': {
    'screen and (min-width: 768px)': {
      display: 'none'
    }
  },
  width: '100%',
  transform: 'skewY(-20deg)',
  transition: 'all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s'
});

export const dropDownMenu = style({
  width: '40%',
  display: 'flex',
  justifyContent: 'space-evenly',
  alignContent: 'flex-end',
  flexDirection: 'column',
  height: '200px',
  alignItems: 'center',
  marginTop: '68px',
  position: 'fixed',
  zIndex: 2
});

export const Navlink = style({
  '@media': {
    'screen and (min-width: 768px)': {
      fontSize: '14px',
      borderRadius: '5px'
    },
    'screen and (max-width: 768px)': {
      width: 'calc(100% - 25px)',
      flexGrow: 1
    }
  },
  borderBottom: '.8px solid #262626',
  color: '#e2e2e2',
  display: 'flex',
  padding: '10px',
  backgroundColor: '#000',
  fontSize: '12px',
  cursor: 'pointer',
  justifyContent: 'center',
  transition: 'all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s',

  ':hover': {
    // backgroundColor: '#111112',
    transform: 'scale(1.05)!important'
  }
});

export const ActiveNavlink = style({
  '@media': {
    'screen and (min-width: 768px)': {
      fontSize: '14px',
      borderRadius: '5px'
    },
    'screen and (max-width: 768px)': {
      width: 'calc(100% - 25px)',
      transform: 'scale(1)',
      backgroundColor: '#000',
      color: '#fff'
    }
  },
  borderBottom: '.8px solid #262626',
  display: 'flex',
  padding: '12px',
  backgroundColor: '#1b1b1c',
  fontSize: '10px',
  cursor: 'pointer',
  justifyContent: 'center',
  transform: 'scale(1.1)'
});
