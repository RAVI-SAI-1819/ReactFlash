import type { FC } from "react"
import '../App.css'
import Carousel from "../components/Carousel"
import { Box, Card, CardContent, Typography } from "@mui/material"
import HeaderSection from "../components/HeaderSection"
import { categories } from "../utils/constants"

const Home: FC = () => {
    return (
        <Box sx={{ width: '90%', mx: 'auto' }}>
            <Carousel />

            {/* NewsCardsList */}
            <Box className="mt-4">
                {/* Mapping through categories */}

                {categories.map((item, index) => <>
                    {/* {item} */}
                    <HeaderSection title={item} />
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
                </>)}
            </Box>
        </Box >
    )
}

export default Home