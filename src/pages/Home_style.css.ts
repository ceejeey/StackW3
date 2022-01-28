import { style } from '@vanilla-extract/css';

export const HomeContainer = style({
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
  alignContent: 'flexstart',
  width: '100%'
});

export const ActiveContent = style({
  margin: 'auto',
  display: 'flex',
  justifyContent: 'space-evenly',
  flexWrap: 'wrap',
  width: '100%'
});
