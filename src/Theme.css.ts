import { createGlobalTheme } from '@vanilla-extract/css';

export const vars = createGlobalTheme(':root', {
  color: {
    primaryColor: '#082164',
    primaryColorLight: "#99082164", 
    accentGreen: "#2BBB63",
    lightAccentGreen: "#2BBB631A",
    backgroundBlue: "#F4F7FF",
    borderGray: "#DDDDDD",
    fontGray: "#666666",
    dangerRed: "#FF0000",
    dangerRedLight: "#FF00001a",
    backgroundRed: "#FF00001A",
    backgroundGray: "#FAFAFA"
  },
  font: {
    // fontFamily: "'PT Sans', sans-serif"
  }
});