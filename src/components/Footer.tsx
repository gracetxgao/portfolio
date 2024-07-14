import { Box, Typography } from '@mui/material';

interface FooterProps {
    textColor: string
}

const Footer = (props: FooterProps) => {
    const { textColor } = props

    return (
        <Box pb={2} sx={{ display: 'flex', justifyContent: 'center', color: textColor }}>
            <Typography>© 2024 Grace Gao</Typography>
        </Box>
    )
}

export default Footer