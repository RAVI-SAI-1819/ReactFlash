import { Box, Button, Card, CardContent, Typography } from "@mui/material"
import type { FC } from "react"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import '../App.css'

const Home: FC = () => {
    return (
        <Box sx={{ width: '90%', mx: 'auto' }}>
            <Box sx={{ display: "flex", justifyContent: "space-between", mt: 4 }}>
                {/* Heading */}
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

            </Box>
            {/* Carousel */}
            <Card className="grid grid-cols-2">
                <Box className="relative h-[360px]">
                    <Box className="bg-red-300 h-full"></Box>
                    <Box
                        className="_carouselGradient"
                        sx={{
                            position: "absolute", bottom: 0,
                            height: "70px", width: '100%'
                        }} />
                    < Typography
                        className="absolute bottom-2 text-white text-[22px] leading-8 line-clamp-3 px-6"
                        sx={{ fontFamily: "serif" }} >
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    </Typography>
                </Box>

                {/* Card Description */}
                <CardContent>
                    <Typography className="text-xl font-serif">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, quos, voluptates laudantium maiores nihil sapiente, consequatur blanditiis ipsum illum ex nam. Rem eveniet error, accusantium doloremque unde perferendis ut inventore!
                    </Typography>
                </CardContent>
            </Card >
        </Box >
    )
}

export default Home