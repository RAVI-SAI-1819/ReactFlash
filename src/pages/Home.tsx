import { Box, Button, Card, CardContent, Typography, Grid } from "@mui/material"
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
            <Card className="grid grid-cols-2 border-2 shadow-none">
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
                <CardContent className="relative">
                    <Typography className="text-xl font-serif line-clamp-4">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, quos.
                    </Typography>
                    <Typography className="text-lg font-serif line-clamp-4">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, quos
                    </Typography>


                    <Box className="absolute bottom-2">
                        <Typography className="text-lg font-serif line-clamp-4">
                            Source: ABC NEWS
                        </Typography>
                        <Typography className="text-lg font-serif line-clamp-4">
                            Date : 10/09/2025
                        </Typography>
                    </Box>
                </CardContent>
            </Card>

            {/* CarouselList */}
            <Box className="grid grid-cols-5 gap-3 mt-8">
                {
                    [...Array(5)].map((item, index) => (
                        <Grid key={index}>
                            <Card className="relative h-[200px]">
                                <Box className="bg-red-300 h-full w-full aspect-[16/10]"></Box>
                                <Box
                                    className="_carouselGradient"
                                    sx={{
                                        position: "absolute", bottom: 0,
                                        height: "70px", width: '100%'
                                    }} />
                                < Typography
                                    className="absolute bottom-2 text-white text-[17px] line-clamp-3 px-3"
                                    sx={{ fontFamily: "serif" }} >
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                </Typography>
                            </Card>
                        </Grid>

                    ))
                }
            </Box>
        </Box >
    )
}

export default Home