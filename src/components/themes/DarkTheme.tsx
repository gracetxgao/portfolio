import { createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
    palette: {
        primary: {
            main: '#1C2231', // dark blue (background)
            light: 'rgba(71, 85, 94, 0.8)', // '#47555E', // mid blue (highlights)
            dark: '#EEF8FF', // light blue (headers)
            contrastText: '#FFFFFF' // white
        },
        secondary: {
            main: '#000000', // white
            light: '#47555E', // mid blue
            dark: '#808080' // grey
        }
    },
    typography: {
        fontFamily: ['Lato', 'sans-serif'].join(','),
    },
});

export default darkTheme