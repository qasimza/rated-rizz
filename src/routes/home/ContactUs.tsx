import { Typography } from "@mui/material";

const ContactUs = () => {
    return (
        <div className="flex flex-col justify-center items-center gap-4 h-[50vh] bg-primary-900 w-screen">
        <Typography variant="h1" className="text-white font-bold text-6xl mt-6">Contact Us!</Typography>
        <Typography variant="body1" className="text-blue-200 font-semibold text-center -mt-4 w-[50vw]">
            Got any ideas, questions, concerns or requests for us? Feel free to reach out to us via our email contact@rated-rizz.com.
        </Typography>
      </div>     
        )
}

export default ContactUs;