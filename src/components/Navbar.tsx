import { Box, Button, ButtonGroup, Divider, InputBase, Typography } from "@mui/material";
import type { FC } from "react";
import SearchIcon from '@mui/icons-material/Search';
import { categories } from "../utils/constants";
const Navbar: FC = () => {
    return (
        <Box className="bg-neutral-900 text-white">
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "90%", mx: "auto", py: 1 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer', fontSize: '1.5rem', fontFamily: 'serif' }}>
                    <Typography sx={{ fontSize: 'inherit', fontFamily: 'inherit', fontWeight: 'bold' }}>React</Typography>
                    <Typography sx={{ fontSize: 'inherit', fontFamily: 'inherit', fontWeight: 'light' }}>Flash</Typography>
                </Box>
                <Box sx={{
                    display: 'flex', alignItems: "center", gap: 2,
                    bgcolor: 'black', color: "#c2c2c2", px: 4, borderRadius: "999px"
                }}>
                    <SearchIcon />
                    <Divider orientation="vertical" variant="middle" flexItem sx={{ bgcolor: "grey" }} />
                    <InputBase
                        placeholder="Search"
                        sx={{
                            color: 'white', width: '350px', height: '2.5rem', fontSize: '1rem', fontFamily: 'serif',
                            '&::placeholder': {
                                color: "#646464"
                            }
                        }} />
                </Box>
            </Box>
            <ButtonGroup className="bg-neutral-900 w-full overflow-x-auto rounded-none" sx={{
                '& .MuiButton-root': {
                    color: 'white'
                }
            }} variant="text">
                {
                    categories.map((item, index) => (
                        <Button key={index}
                            sx={{ fontSize: '12px', }}
                            className="min-w-fit w-full hover:bg-neutral-800"
                        >
                            {item}
                        </Button>
                    ))
                }
            </ButtonGroup>
        </Box >
    )
}

export default Navbar