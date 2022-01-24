import { autocompleteClasses } from '@mui/material';
import { style } from '@vanilla-extract/css';

export const Container = style({
  padding: '40px',
  borderRadius: '25px',
  backgroundColor: '#0D0D0D',
  marginTop: '125px',
  transition: 'all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s',
  ':hover': {
    transform: 'scale(1.05)'
  }
});

export const HeaderContainer = style({
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
  fontSize: '20px',
  fontWeight: '700'
});

export const HeaderWrap = style({
  width: '78%',
  margin: 'auto'
});

export const Title = style({
  fontSize: '20px',
  fontFamily: 'popppins',
  fontWeight: '700'
});

export const IconContainer = style({
  justifyContent: 'flex-end',
  width: '22%',
  alignSelf: 'center',
  cursor: 'pointer'
});

export const IconWrap = style({
  display: 'flex',
  justifyContent: 'center',
  fontSize: '10px'
});

export const Iconbackground = style({
  height: '40px',
  width: '40px',
  borderRadius: '50%',
  margin: 'auto',
  backgroundColor: '#262626',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '16px'
});

export const Para = style({
  marginTop: '20px',
  width: '482px',
  fontSize: '12px',
  color: '#A3A3A3',
  lineHeight: '21.78px',
  letterSpacing: '.5px',
  fontFamily: 'poppins'
});

export const Action = style({
  margin: '5px',
  marginTop: '20px'
});

export const Tags = style({
  display: 'flex'
});

export const Tag = style({
  marginRight: '20px',
  width: '4rem',
  border: '0.5px solid #505050',
  borderRadius: '20px',
  padding: '5px',
  textAlign: 'center',
  backgroundColor: '#363638',
  color: '#FFFFFF',
  fontFamily: 'poppins',
  fontSize: '9.8px',
  fontWeight: '400'
});

export const ButtonsContainer = style({
  display: 'flex',
  width: '100%',
  justifyContent: 'flex-end'
});

export const button = style({
  fontFamily: 'poppins',
  width: '116px',
  height: '43px',
  borderRadius: '8.78px',
  padding: '10px',
  textAlign: 'center',
  backgroundColor: '#262626',
  fontSize: '12px',
  border: 'none',
  color: '#FFFFFF',
  fontWeight: '400',
  cursor: 'pointer'
});

export const ModalErrorHeaderContainer = style({
  fontFamily: 'poppins',
  margin: '0 auto',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '20px',
  fontWeight: '700',
  color: 'red'
});

export const loadingContainer = style({
  display: 'flex',
  padding: '100px',
  justifyContent: 'center',
  marginTop: '10%'
});
