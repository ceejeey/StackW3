import { style } from '@vanilla-extract/css';

export const backgroundImage = style({
  '::before': {
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
  color: '#262626'
});

export const HeaderContainer = style({
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center'
});

export const HeaderWrapper = style({
  '@media': {
    'screen and (min-width: 768px)': {
      width: '36%'
    }
  },
  width: '60%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center'
});

export const tag = style({
  color: '#fff',
  fontSize: 16,
  fontWeight: 500,
  '@media': {
    'screen and (min-width: 768px)': {
      width: '873px',
      fontSize: 22
    }
  },

  selectors: {
    '&:nth-child(2n)': {
      '@media': {
        'screen and (min-width: 768px)': {
          width: 420,
          height: 26,
          fontSize: 12
        }
      },
      padding: '0 10px',
      width: 80,
      height: 20,
      borderRadius: 200,
      border: '1px solid #3f3f3f',
      backgroundColor: '#151515',
      color: '#3F3F3F',
      fontSize: 8,
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
    }
  },
  width: '41%',
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

  fontSize: 16,
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
  fontWeight: 700
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
