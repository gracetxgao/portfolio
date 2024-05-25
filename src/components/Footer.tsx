import { Box } from '@mui/material';

interface FooterProps {
    textColor: string
}

const Footer = (props: FooterProps) => {
    const { textColor } = props

    return (
        <Box paddingInline={10} sx={{ display: 'flex', justifyContent: 'center', color: textColor }}>
            <p>© 2024 Grace Gao</p>
        </Box>
    )
}

export default Footer