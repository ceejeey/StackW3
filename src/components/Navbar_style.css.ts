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
  marginTop: '100px',
  display: 'flex',
  padding: '10px',
  backgroundColor: '#000',
  fontSize: '14px',
  cursor: 'pointer',
  justifyContent: 'center',
  borderRadius: '5px',
  transition: 'all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s',

  ':hover': {
    // backgroundColor: '#111112',
    transform: 'scale(1.05)'
  }
});

export const ActiveNavlink = style({
  marginTop: '100px',
  display: 'flex',
  padding: '10px',
  backgroundColor: '#1b1b1c',
  fontSize: '14px',
  cursor: 'pointer',
  justifyContent: 'center',
  borderRadius: '5px',
  transform: 'scale(1.1)'
});
