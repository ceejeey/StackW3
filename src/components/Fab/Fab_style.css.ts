import { style } from '@vanilla-extract/css';

export const Iconbackground = style({
  '@media': {
    'screen and (min-width: 768px)': {
      height: 36,
      width: 36
    }
  },
  height: 32,
  width: 32,
  borderRadius: '50%',
  border: 'none',
  backgroundColor: '#262626',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: '#b3b1b1',
  transition: 'all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s',
  cursor: 'pointer',
  ':hover': {
    transform: 'scale(1.06)',
    color: '#fff'
  }
});

export const IconSandBox = style({
  height: '20px',
  width: '20px'
});
