import { Stack, Typography } from "@mui/material";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  
  const error = useRouteError();
  console.error(error);
  
  return (
      <Stack
        justifyContent="center"
        alignItems="center"
        rowGap={4}
        className="h-screen"
        >
        <Typography variant="h1" className="text-primary-600 font-bold text-6xl mt-6">Oops! Looks like we ran into an error...</Typography>
        <Typography variant="h1" className="text-secondary-700 font-semibold text-3xl text-center">
          <div>Try refreshing the page.</div>
          <div>If you still see this error, please feel free to contact us!</div>
          </Typography>

      </Stack>      
    )
}

export default ErrorPage;