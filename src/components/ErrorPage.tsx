import { Stack, Typography } from "@mui/material";

const ErrorPage = () => {
    return (
      <Stack
        justifyContent="center"
        alignItems="center"
        rowGap={4}
        className="h-screen"
        >
        <Typography variant="h1" className="text-primary-600 font-bold text-6xl mt-6">Oops! Looks like we ran into an error...</Typography>
        <Typography variant="h1" className="text-secondary-700 font-semibold text-3xl text-center">
          <div>RatedRizz team might be still working on this feature.</div>
          <div>Try again in a few days and if you are still having issues, feel free to contact us :) </div>
          </Typography>

      </Stack>      
    )
}

export default ErrorPage;