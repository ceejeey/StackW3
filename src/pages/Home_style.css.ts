import { style } from '@vanilla-extract/css';

export const HomeContainer = style({
  '@media': {
    'screen and (min-width: 768px)': {
      padding: '10px'
    }
  },
  padding: '10px'
});

export const loadingContainer = style({
  display: 'flex',
  padding: '10px',
  justifyContent: 'center',
  marginTop: '10%'
});

export const Content = style({
  margin: 'auto',
  display: 'none',
  justifyContent: 'space-evenly',
  flexWrap: 'wrap',

  width: '100%'
});

export const ActiveContent = style({
  '@media': {
    'screen and (min-width: 768px)': {
      padding: '10px',
      margin: 'auto'
    }
  },
  display: 'flex',
  justifyContent: 'space-evenly',
  alignContent: 'flex-start',
  flexWrap: 'wrap',
  width: '100%',
  marginTop: '50px'
});
