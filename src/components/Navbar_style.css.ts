import { style } from '@vanilla-extract/css';

export const AppHeader = style({
  backgroundColor: '#000',
  width: '100%',
  height: '5rem'
});

export const Navmenu = style({
  
  display: 'flex',
  justifyContent: 'space-evenly',
  height: '100%',
  alignItems: 'center',
  margin:'auto',
});

export const Navlink = style({
  
display: 'flex',
 padding: '10px',
 width: '8rem',
 backgroundColor: '#000',
 fontSize: '14px',
 cursor: 'pointer',
 justifyContent:'center',
 borderRadius:'5px',
 fontFamily:'poppins',

 ':hover': {
  backgroundColor: '#1b1b1c'
},
});

export const ActiveNavlink = style({
  
  display: 'flex',
   padding: '10px',
   width: '8rem',
   backgroundColor: '#1b1b1c',
   fontSize: '14px',
   cursor: 'pointer',
   justifyContent:'center',
   borderRadius:'5px',
   fontFamily:'poppins',
  });