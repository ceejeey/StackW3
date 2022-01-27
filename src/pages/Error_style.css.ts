import { style } from '@vanilla-extract/css';

export const ModalContainer = style({
  fontFamily: 'poppins',
  width: '603px',
  height: '561px',
  position: 'absolute',
  margin: 'auto',
  top: '0',
  left: '0',
  bottom: '0',
  right: '0',
  background: '#151515',
  backdropFilter: 'blur( 4px )',
  border: '1px solid #242424',
  borderRadius: '5px'
});

export const ModalHeaderContainer = style({
  height: '10%',
  display: 'flex',
  alignItems: 'center',
  padding: '0px 30px'
});

export const header = style({
  fontSize: '16px',
  fontWeight: '300',
  lineHeight: '19px',
  color: '#EDEDED'
});

export const SuccessContainer = style({
  height: 'calc(122px - 40px)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '20px 40px',
  background: 'linear-gradient(90deg, rgba(215, 15, 15, 0.2816) 13.02%, rgba(21, 21, 21, 0) 100%)'
});

export const CheckCircleIcon = style({
  color: '#D70F0F',
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
  color: '#D70F0F'
});

export const Successmesaggewrapper = style({
  width: 370,
  height: 32,
  fontSize: 12,
  fontWeight: 300,
  color: '#ccc'
});

export const ModalTextContainer = style({
  width: '538px',
  height: '64%',
  display: 'flex',
  justifyContent: 'space-evenly',
  flexDirection: 'column',
  position: 'relative',
  margin: '20px auto'
});

export const input = style({
  fontFamily: 'poppins',
  height: '30px',
  padding: '10px',
  background: '#222222',
  border: 'none',
  fontSize: '14px',
  fontWeight: '500',
  borderRadius: '10px',
  color: '#fff',

  ':focus': {
    outline: 'none',
    backgroundColor: 'none',
    color: '#fff'
  }
});

export const OptionContainer = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: '145px'
});

export const VisibilityContainer = style({
  display: 'flex',
  justifyContent: 'space-between',
  height: '40px',
  padding: '12px',
  background: '#060606',
  borderRadius: '10px',
  alignItems: 'center'
});

export const VisibilityWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  color: '#EDEDED',
  fontSize: '13px'
});

export const Description = style({
  fontSize: '13px',
  fontWeight: '300',
  color: '#444444',
  marginTop: '2px'
});

export const ModalinputContainer = style({
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  alignContent: 'flex-start',
  alignSelf: 'flex-start',
  width: '100%'
});

export const ButtonContainer = style({});

export const Button = style({
  fontFamily: 'poppins',
  width: '140px',
  height: '45px',
  borderRadius: '8.65px',
  padding: '10px',
  textAlign: 'center',
  backgroundColor: '#1976D2',
  fontSize: '12px',
  border: 'none',
  color: '#FFFFFF',
  fontWeight: '400',
  transition: '0.5s ease-in all',

  ':disabled': {
    backgroundColor: '#262626'
  }
});

export const LoadingContainer = style({
  marginBottom: '50px',
  width: '100%',
  height: '100%'
});

export const Tooltip = style({
  position: 'absolute',
  top: 5,
  bottom: 0,
  right: 0,
  height: '40px'
});
