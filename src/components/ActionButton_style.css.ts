import { style } from '@vanilla-extract/css';

export const button = style({
  '@media': {
    'screen and (min-width: 768px)': {
      width: 109,
      fontSize: 13
    }
  },
  fontSize: 9,
  backgroundColor: '#262626',
  margin: '0 3px',
  color: '#fff',
  border: 'none',
  padding: '10px 0',
  width: 90,
  display: 'flex',
  justifyContent: 'space-evenly',
  alignItems: 'center',
  borderRadius: '4px',
  cursor: 'pointer'
});

export const Iconbackground = style({
  '@media': {
    'screen and (min-width: 768px)': {
      height: 40,
      width: 40
    }
  },
  height: 32,
  width: 32,
  borderRadius: '50%',
  border: 'none',
  margin: 'auto',
  backgroundColor: '#262626',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '16px',
  color: '#b3b1b1',
  transition: 'all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s',
  cursor: 'pointer',
  ':hover': {
    transform: 'scale(1.06)',
    color: '#fff'
  }
});
