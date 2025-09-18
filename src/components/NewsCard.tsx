import { Box, Card, CardContent, Typography } from "@mui/material"
import type { FC } from "react"


const NewsCard: FC = () => {
    return (
        <Box className="grid grid-cols-5 gap-3">
            {
                [...Array(5)].map((_, index) =>
                    <Card key={index}>
                        <Box className="bg-red-300 aspect-[16/9] h-[180px]" />
                        <CardContent className="relative">
                            <Typography className="text-[16px] font-serif line-clamp-4">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, quos.
                            </Typography>
                            <Typography className="text-[14px] font-serif line-clamp-4">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, quos
                            </Typography>


                            <Box className="">
                                <Typography className="text-[14px] font-serif line-clamp-4">
                                    Source: ABC NEWS
                                </Typography>
                                <Typography className="text-[14px] font-serif line-clamp-4">
                                    Date : 10/09/2025
                                </Typography>
                            </Box>
                        </CardContent>
                    </Card>
                )
            }
        </Box>
    )
}

export default NewsCard