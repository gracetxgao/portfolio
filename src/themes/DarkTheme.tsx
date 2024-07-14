import { createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
    palette: {
        primary: {
            main: '#000000', // black
            light: 'rgba(184, 212, 232, 0.8)', // mid blue (highlights)
            dark: '#FFFFFF', // white
            contrastText: '#2D79ED' // blue links
        },
        secondary: {
            main: '#FFFFFF', // white
            light: '#B8D4E8', // mid blue
            dark: '#808080' // grey
        }
    },
    typography: {
        fontFamily: ['Nunito', 'sans-serif'].join(','),
    },
});

export default darkTheme