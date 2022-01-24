import { style } from '@vanilla-extract/css';

export const Container = style({
  fontFamily: 'poppins',
  width: '873px',
  height: '603px',
  position: 'absolute',
  margin: 'auto',
  top: '0',
  left: '0',
  bottom: '0',
  right: '0',
  background: '#151515',
  borderRadius: '5px',
  border: '1px solid #242424',
  padding: '30px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between'
});

export const HeaderContainer = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center'
});

export const HeaderWrapper = style({
  width: '40%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center'
});

export const tag = style({
  fontFamily: 'poppins',
  color: '#fff',
  fontSize: 22,
  fontWeight: 500,

  selectors: {
    '&:nth-child(2n)': {
      width: 137,
      height: 26,
      borderRadius: 200,
      border: '1px solid #3f3f3f',
      backgroundColor: '#151515',
      color: '#3F3F3F',
      fontSize: 14,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }
  }
});

export const ActionWrapper = style({
  width: '37%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center'
});

export const Icon = style({
  marginRight: '15px',
  cursor: 'pointer'
});

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
  cursor: 'pointer',

  selectors: {
    '&:nth-child(2n)': {
      width: 134
    }
  }
});

export const DecsriptionContainer = style({
  width: 'calc(100% - 64px)',
  height: 69,
  backgroundColor: '#222',
  borderRadius: '20px',
  padding: 32,
  fontSize: 16,
  fontWeight: 400,
  color: '#8d8d8d'
});

export const TagsContainer = style({
  display: 'flex',
  justifyContent: 'space-between',
  flexDirection: 'column',
  width: 'calc(100% - 64px)',
  height: 219,
  backgroundColor: '#222',
  borderRadius: '20px',
  padding: '40px 30px',
  flexWrap: 'wrap'
});
export const Tags = style({
  backgroundColor: '#222',
  height: '30px',
  width: '250px',
  borderRadius: '20px',
  fontSize: 15,
  fontWeight: 400,
  color: '#8d8d8d'
});
