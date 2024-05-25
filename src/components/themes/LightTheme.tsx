import { createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
    palette: {
        primary: {
            main: '#EEF8FF', // light blue (background)
            light: 'rgba(184, 212, 232, 0.8)', // mid blue (highlights)
            dark: '#1C2231', // dark blue (headers)
            contrastText: '#000000' // black
        },
        secondary: {
            main: '#FFFFFF', // white
            light: '#B8D4E8', // mid blue
            dark: '#808080' // grey
        }
    },
    typography: {
        fontFamily: ['Lato', 'sans-serif'].join(','),
    },
});

export default lightTheme