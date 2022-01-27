import { style } from '@vanilla-extract/css';

export const Container = style({
  fontFamily: 'poppins',
  width: '603px',
  height: '244px',
  position: 'absolute',
  margin: 'auto',
  top: '0',
  left: '0',
  bottom: '0',
  right: '0',
  background: '##151515',
  border: '1px solid #242424',
  borderRadius: '5px'
});

export const SuccessContainer = style({
  height: 'calc(50% - 40px)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '20px 40px',
  background: 'linear-gradient(90deg, rgba(15, 215, 118, 0.2816) 13.02%, rgba(21, 21, 21, 0) 100%)',
  color: '#00E275',
  fontSize: 16
});

export const NotSuccessContainer = style({
  height: 'calc(100% - 40px)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '20px 40px',
  background: 'linear-gradient(90deg, rgba(215, 15, 15, 0.2816) 13.02%, rgba(21, 21, 21, 0) 100%)',
  color: 'rgba(215, 15, 15)',
  fontSize: 26
});

export const CheckCircleIcon = style({
  height: '32px',
  float: 'left',
  width: '20%',
  display: 'flex',
  justifyContent: 'center',
  color: 'inherit'
});

export const CancelCircleIcon = style({
  height: '32px',
  width: '60%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  color: 'inherit'
});

export const HeaderContainer = style({
  display: 'flex',
  height: '75%',
  width: '70%',
  flexDirection: 'column',
  justifyContent: 'space-between',
  fontFamily: 'poppins',
  color: 'inherit'
});

export const title = style({
  fontWeight: 700,
  color: 'inherit'
});

export const Description = style({
  width: 370,
  height: 32,
  fontSize: 12,
  fontWeight: 300,
  color: '#ccc'
});

export const buttonConatiner = style({
  display: 'flex',
  height: '50%',
  justifyContent: 'flex-end',
  alignItems: 'center',
  alignContent: 'center',
  padding: '0 20px',
  fontSize: 12,
  fontWeight: 300
});

export const Button = style({
  width: 140,
  fontFamily: 'poppins',
  height: 45,
  backgroundColor: 'transparent',
  border: 'none',
  margin: '5px',
  borderRadius: '8px',
  color: '#fff',
  fontSize: 11,
  fontWeight: 300,
  cursor: 'pointer',

  selectors: {
    '&:nth-child(2n)': {
      background: '#262626'
    }
  }
});
