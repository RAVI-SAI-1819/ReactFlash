import type { FC } from "react";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Box, Button, Typography } from "@mui/material";


const HeaderSection: FC = () => {
    return (
        // Heading 
        < Box sx={{ display: "flex", justifyContent: "space-between", mt: 4 }}>
            <Typography sx={{
                fontSize: '2.25rem', fontFamily: 'serif',
                cursor: 'pointer'
            }}>
                Top Headlines
            </Typography>
            <Button sx={{
                display: "flex", alignItems: "center", gap: 1,
                color: 'black', '&:hover': {
                    textDecoration: 'underline', textUnderlineOffset: '2px'
                }
            }}>
                See All
                <ArrowForwardIcon sx={{ fontSize: '1.25rem' }} />
            </Button>
        </Box >
    )
}

export default HeaderSection


