import { Box, Card, Grid, Typography } from "@mui/material"
import type { FC } from "react"


const CarouselList: FC = () => {
    return (
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
    )
}

export default CarouselList