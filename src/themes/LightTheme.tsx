import { createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
    palette: {
        primary: {
            main: '#000000', // black
            light: 'rgba(184, 212, 232, 0.8)', // mid blue (highlights)
            dark: '#000000', // black
            contrastText: '#2D79ED' // blue links
        },
        secondary: {
            main: '#2D79ED', // blue
            light: '#B8D4E8', // mid blue
            dark: '#808080' // grey
        },
        background: {
            default: '#FFFFFF'
        }
    },
    typography: {
        fontFamily: ['Nunito', 'sans-serif'].join(','),
    },
});

export default lightTheme