import type { FC } from "react"
import '../App.css'
import Carousel from "../components/Carousel"
import { Box, Card, CardContent, Typography } from "@mui/material"
import HeaderSection from "../components/HeaderSection"
import { categories } from "../utils/constants"
import HomeCardsList from "../components/HomeCardsList"

const Home: FC = () => {
    return (
        <Box sx={{ width: '90%', mx: 'auto' }}>
            <Carousel />

            {/* NewsCardsList */}
            <HomeCardsList />
        </Box >
    )
}

export default Home