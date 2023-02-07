import { Box } from "@mui/material"
import { AboutUs } from "./AboutUs"
import { Banner } from "./Banner"

export const Home = () =>{
    return (
        <Box>
            {/* <Box component */}
            <Banner/>
            <AboutUs/>
        </Box>
    )
}