import { Box } from "@mui/material"
import type { FC } from "react"
import NewsCard from "./NewsCard"
import { categories } from "../utils/constants"
import HeaderSection from "./HeaderSection"



const HomeCardsList: FC = () => {
    return (
        <Box>
            <Box className="mt-4">
                <Box>
                    {/* Mapping through categories */}
                    {categories.map((item, index) =>
                        <Box>
                            {/* {item} */}
                            <HeaderSection title={item} />
                            <NewsCard />
                        </Box>
                    )}
                </Box>
            </Box >
        </Box>
    )
}

export default HomeCardsList