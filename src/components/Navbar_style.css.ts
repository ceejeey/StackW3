import { style } from '@vanilla-extract/css';

export const AppHeader = style({
  backgroundColor: '#000',
  width: '100%',
  height: '5rem'
});

export const Navmenu = style({
  width: '40%',
  display: 'flex',
  justifyContent: 'space-evenly',
  height: '100%',
  alignItems: 'center',
  margin: 'auto'
});

export const Navlink = style({
  '@media': {
    'screen and (min-width: 768px)': {
      fontSize: '14px'
    }
  },
  marginTop: '100px',
  display: 'flex',
  padding: '10px',
  backgroundColor: '#000',
  fontSize: '10px',
  cursor: 'pointer',
  justifyContent: 'center',
  borderRadius: '5px',
  transition: 'all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s',

  ':hover': {
    // backgroundColor: '#111112',
    transform: 'scale(1.05)!important'
  }
});

export const ActiveNavlink = style({
  '@media': {
    'screen and (min-width: 768px)': {
      fontSize: '14px'
    }
  },
  marginTop: '100px',
  display: 'flex',
  padding: '10px',
  backgroundColor: '#1b1b1c',
  fontSize: '10px',
  cursor: 'pointer',
  justifyContent: 'center',
  borderRadius: '5px',
  transform: 'scale(1.1)'
});
