import { createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
    palette: {
        primary: {
            main: '#FFFFFF', // white
        },
        secondary: {
            main: '#2D79ED', // white
        },
        background: {
            default: '#000000' // black
        }
    },
    typography: {
        fontFamily: ['Nunito', 'sans-serif'].join(','),
    },
});

export default darkTheme