import { Box } from "@mui/material"
import type { FC } from "react"
import HeaderSection from "./HeaderSection"
import CarouselCard from "./CarouselCard"
import CarouselList from "./CarouselList"


const Carousel: FC = () => {
    return (
        <Box>
            {/* Header Section */}
            <HeaderSection title="Top Headlines" />
            {/* Carousel */}
            <CarouselCard />

            {/* CarouselList */}
            <CarouselList />
        </Box>
    )
}

export default Carousel