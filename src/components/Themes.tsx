import { createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
    palette: {
        primary: {
            main: '#EEF8FF',
        },
        secondary: {
            main: '#1C2231'
        }
    },
    typography: {
        fontFamily: ['Lato', 'sans-serif'].join(','),
    },
});

const darkTheme = createTheme({
    palette: {
        primary: {
            main: '#1C2231'
        },
    },
    typography: {
        fontFamily: ['Lato', 'sans-serif'].join(','),
    },
});


export default { lightTheme, darkTheme };