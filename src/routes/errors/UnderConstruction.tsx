import { Stack, Typography } from "@mui/material";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  
  const error = useRouteError();
  console.error(error);
  
  return (
    <div className="flex flex-col justify-center items-center gap-4 h-screen">
        <Typography variant="h1" className="text-primary-600 font-bold text-6xl mt-6">Coming Soon...</Typography>
        <Typography variant="h2" className="text-secondary-700 font-semibold text-3xl text-center">
          This page is still under construction.
        </Typography>
        <Typography variant="body1" className="text-secondary-700 font-semibold text-center -mt-4">
          <div>RatedRizz team is working diligently to deploy amazing new features to support students all around the world.</div>
          <div>Sometimes, building quality products can take time, but rest assured we will release this feature ASAP!</div>
          </Typography>

      </div>      
    )
}

export default ErrorPage;