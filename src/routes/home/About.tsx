import { Stack, Typography } from "@mui/material";
import UnderConstruction from "../errors/UnderConstruction";

const About = () => {
    return (
         <Stack
        justifyContent="center"
        alignItems="center"
        rowGap={3}
        className="h-screen"
        >
        <Typography variant="h1" className="text-primary-600 font-bold text-6xl mt-6">About</Typography>
        <Typography variant="body1" className="text-secondary-700 font-semibold text-center -mt-4">
          <div>Sometimes, building quality products can take time, but rest assured we will release this feature ASAP!</div>
          </Typography>

      </Stack>      
        )
}

export default About;