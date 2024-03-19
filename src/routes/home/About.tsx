import { Typography } from "@mui/material";

const About = () => {
    return (
        <div id="#about" className="flex flex-col justify-center items-center gap-10 h-[50vh] bg-primary-900 w-screen">
        <Typography variant="h1" className="text-white font-bold text-6xl mt-6">How It Works</Typography>
        <Typography variant="body1" className="text-blue-200 font-semibold text-center -mt-4 w-[50vw]">
            RatedRizz is a platform where college students take control of their academic journey! 
            You can rate your professors, get homework help, and refine your homework approach with our built in AI.
        </Typography>
      </div>      
        )
}

export default About;