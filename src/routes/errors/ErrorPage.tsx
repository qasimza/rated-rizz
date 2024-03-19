import { Typography } from '@mui/material'
import { useRouteError } from 'react-router-dom'

const ErrorPage = () => {
  const error = useRouteError()
  console.error(error)

  return (
      <div className="flex flex-col justify-center items-center gap-4 h-screen">
        <Typography variant="h1" className="text-primary-600 font-bold text-6xl mt-6">Oops! Looks like we ran into an error...</Typography>
        <Typography variant="h1" className="text-secondary-700 font-semibold text-3xl text-center">
          <div>Try refreshing the page or restart your browser.</div>
          <div>If the issue still persists, please feel free to contact us!</div>
          </Typography>

      </div>
  )
}

export default ErrorPage
