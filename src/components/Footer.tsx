import { Box, Typography } from '@mui/material';

interface FooterProps {
    textColor: string
}

const Footer = (props: FooterProps) => {
    const { textColor } = props
    const year = new Date().getFullYear();

    return (
        <Box pb={2} sx={{ display: 'flex', justifyContent: 'center', color: textColor }}>
            <Typography>© {year} Grace Gao</Typography>
        </Box>
    )
}

export default Footer