import { autocompleteClasses } from '@mui/material';
import { display, height, minWidth, textTransform } from '@mui/system';
import { style } from '@vanilla-extract/css';

export const Container = style({
  '@media': {
    'screen and (min-width: 768px)': {
      height: 210,
      width: 467,
      padding: 40
    }
  },
  display: 'flex',
  flexDirection: 'column',
  width: '85%',
  padding: 30,
  borderRadius: '20px',
  backgroundColor: '#141414',
  margin: '20px 10px',
  transition: 'all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s',

  ':hover': {
    transform: 'scale(1.03)!important'
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
  '@media': {
    'screen and (min-width: 768px)': {
      width: '70%'
    }
  },

  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  width: '55%',
  margin: 'auto 0px'
});

export const Title = style({
  fontSize: '20px',
  color: '#e2e2e2',
  fontWeight: '700',
  textTransform: 'capitalize'
});

export const IconContainer = style({
  '@media': {
    'screen and (min-width: 768px)': {
      width: '26.5%'
    }
  },
  display: 'flex',
  justifyContent: 'space-evenly',
  width: '35.5%',
  cursor: 'pointer'
});

export const IconWrap = style({
  display: 'flex',
  justifyContent: 'center',
  fontSize: '10px'
});

export const Iconbackground = style({
  '@media': {
    'screen and (min-width: 768px)': {
      height: 40,
      width: 40
    }
  },
  height: 30,
  width: 30,
  borderRadius: '50%',
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

export const IconSandBox = style({
  height: '20px',
  width: '20px'
});

export const descriptionContainer = style({
  '@media': {
    'screen and (min-width: 768px)': {
      height: 210,
      width: 482
    }
  },
  display: 'flex',
  whiteSpace: 'normal',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  marginTop: '20px',
  maxWidth: '402px',
  minWidth: '300px',
  maxHeight: 81,
  minHeight: 40,
  fontSize: '12px',
  color: '#A3A3A3',
  lineHeight: '21.78px',
  letterSpacing: '.5px'
});

export const Action = style({
  '@media': {
    'screen and (min-width: 768px)': {
      flexDirection: 'row'
    }
  },
  flexDirection: 'column',
  margin: '5px',
  marginTop: '20px',
  display: 'flex',
  alignItems: 'flex-end'
});

export const Tags = style({
  '@media': {
    'screen and (min-width: 768px)': {
      height: '100%'
    }
  },
  display: 'flex',
  alignContent: 'flex-start',
  width: '70%',
  flexWrap: 'wrap',
  minHeight: '70px'
});

export const Tag = style({
  '@media': {
    'screen and (min-width: 768px)': {
      maxWidth: '6rem',
      padding: '2px 8px',
      fontSize: '10px'
    }
  },

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '3px 3px 3px 0px',
  maxWidth: '4rem',
  height: '20px',
  border: '0.5px solid #474747',
  borderRadius: '20px',
  padding: '1px 4px',
  textAlign: 'center',
  color: '#8A8A8A',
  fontSize: '7.3px',
  fontWeight: '100',
  cursor: 'pointer'
});

export const ButtonsContainer = style({
  '@media': {
    'screen and (min-width: 768px)': {
      // display: 'flex',
      // justifyContent: 'flex-end',
      // alignItems: 'flex-end',
      width: 140,
      height: '45px'
    }
  },

  height: '35px'
});

// export const button = style({
//   '@media': {
//     'screen and (min-width: 768px)': {
//       width: '116px',
//       height: '43px',
//       fontSize: '12px'
//     }
//   }
// width: '100%',
// height: '35px',
// borderRadius: '8.78px',
// padding: '10px',
// textAlign: 'center',
// backgroundColor: '#262626',
// fontSize: 10,
// border: 'none',
// color: '#FFFFFF',
// fontWeight: '400',
// cursor: 'pointer'
// });

export const ModalErrorHeaderContainer = style({
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
