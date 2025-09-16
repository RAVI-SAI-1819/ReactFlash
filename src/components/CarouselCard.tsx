import { Box, Card, CardContent, Typography } from "@mui/material"
import type { FC } from "react"


const CarouselCard: FC = () => {
    return (
        <Box>
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
        </Box>
    )
}

export default CarouselCard