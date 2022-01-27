import { style } from '@vanilla-extract/css';

export const button = style({
  fontSize: 13,
  backgroundColor: '#262626',
  margin: '0 3px',
  color: '#fff',
  border: 'none',
  padding: '10px 0',
  width: 109,
  display: 'flex',
  justifyContent: 'space-evenly',
  alignItems: 'center',
  borderRadius: '4px',
  cursor: 'pointer'
});

export const Iconbackground = style({
  height: '40px',
  width: '40px',
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
  ':hover': {
    transform: 'scale(1.06)',
    color: '#fff'
  }
});
