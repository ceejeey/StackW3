import { style } from '@vanilla-extract/css';

export const backgroundImage = style({
  '::before': {
    height: '100vh',
    background: `url('/src/components/Assets/Background.png') center center / cover no-repeat fixed`,
    content: '',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1,
    filter: 'blur(25px)'
  }
});
export const Container = style({
  '@media': {
    'screen and (min-width: 768px)': {
      width: '873px'
    }
  },
  width: 'calc(100% - 70px)',
  height: '603px',
  position: 'absolute',
  margin: 'auto',
  top: '0',
  left: '0',
  bottom: '0',
  right: '0',
  background: '#0D0D0D',
  borderRadius: '5px',
  border: '1px solid #242424',
  padding: '30px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between'
});

export const CancelIconWrapper = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center'
});
export const CancelIcon = style({
  float: 'right',
  color: '#262626',
  marginTop: '-18px'
});

export const HeaderContainer = style({
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center'
});

export const HeaderWrapper = style({
  '@media': {
    'screen and (min-width: 768px)': {
      maxWidth: '65%',
      // width: '33.5%',
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'flex-start'
    }
  },

  width: '60%',
  display: 'flex',
  justifyContent: 'flex-start',
  flexDirection: 'column'
});

export const tag = style({
  textTransform: 'capitalize',
  marginBottom: '8px',
  display: 'flex',
  justifyContent: 'flex-start',
  color: '#e2e2e2',
  fontSize: 17,
  fontWeight: 500,
  '@media': {
    'screen and (min-width: 768px)': {
      fontSize: 24,
      maxWidth: 360,
      alignItems: 'flex-start'
    }
  },

  selectors: {
    '&:nth-child(2n)': {
      '@media': {
        'screen and (min-width: 768px)': {
          width: 140,
          height: 26,
          fontSize: 12,
          marginLeft: '25px'
        }
      },
      padding: '0 5px',
      width: 85,
      height: 20,
      borderRadius: 200,
      border: '1px solid #3f3f3f',
      backgroundColor: '#151515',
      color: '#3F3F3F',
      fontSize: 10,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }
  }
});

export const ActionWrapper = style({
  '@media': {
    'screen and (min-width: 768px)': {
      width: '20%'
    },
    'screen and (max-width: 500px)': {
      width: '50%'
    }
  },
  width: '35%',
  display: 'flex',
  justifyContent: 'space-evenly',
  alignItems: 'center'
});

export const Icon = style({
  cursor: 'pointer',
  color: '#b3b1b1'
});

export const DecsriptionContainer = style({
  width: 'calc(100% - 64px)',
  height: 89,
  backgroundColor: '#262626',
  borderRadius: '20px',
  padding: '10px 32px',
  color: '#8d8d8d'
});

export const Decsription = style({
  width: '100%',
  height: '100%',

  fontSize: 15,
  fontWeight: 400,
  overflowX: 'auto',
  resize: 'none',

  selectors: {
    '&::-webkit-scrollbar': {
      display: 'none'
    }
  }
});

export const DecsriptionHeader = style({
  '@media': {
    'screen and (min-width: 768px)': {
      fontSize: 24,
      fontWeight: 700
    }
  },
  color: '#e2e2e2',
  fontWeight: 500,
  fontSize: 17
});

export const TagsContainer = style({
  display: 'flex',
  justifyContent: 'space-between',
  flexDirection: 'column',
  width: 'calc(100% - 64px)',
  height: 219,
  backgroundColor: '#262626',
  borderRadius: '20px',
  padding: '40px 30px',
  flexWrap: 'wrap',
  overflowY: 'auto',

  selectors: {
    '&::-webkit-scrollbar': {
      display: 'none'
    }
  }
});
export const Tags = style({
  height: '30px',
  width: '250px',
  borderRadius: '20px',
  fontSize: 15,
  fontWeight: 400,
  color: '#8d8d8d'
});
