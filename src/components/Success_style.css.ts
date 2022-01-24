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
  background: 'linear-gradient(90deg, rgba(15, 215, 118, 0.2816) 13.02%, rgba(21, 21, 21, 0) 100%)'
});

export const CheckCircleIcon = style({
  color: '#00E275',
  height: '32px',
  float: 'left',
  width: '20%',
  display: 'flex',
  justifyContent: 'center'
});

export const HeaderContainer = style({
  display: 'flex',
  height: '75%',
  width: '70%',
  flexDirection: 'column',
  justifyContent: 'space-between',
  fontFamily: 'poppins'
});

export const title = style({
  fontSize: 16,
  fontWeight: 700,
  color: '#00E275'
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

  selectors: {
    '&:nth-child(2n)': {
      background: '#262626'
    }
  }
});
