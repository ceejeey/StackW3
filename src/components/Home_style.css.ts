import { style } from '@vanilla-extract/css';



export const Container = style({

    padding: '100px'

});

export const Content = style({
    margin:'auto',
    display:'none',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    alignContent: 'flexstart',
    width:'1212px',
    
});

export const ActiveContent = style({
    margin:'auto',
    display:'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    alignContent: 'flexstart',
    width:'1212px',
    
});