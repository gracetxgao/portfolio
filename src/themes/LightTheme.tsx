import { createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
    palette: {
        primary: {
            main: '#000000', // black
        },
        secondary: {
            main: '#2D79ED', // blue
        },
        background: {
            default: '#FFFFFF' // white
        }
    },
    typography: {
        fontFamily: ['Nunito', 'sans-serif'].join(','),
    },
});

export default lightTheme