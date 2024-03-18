import { Card, CardContent, Typography } from "@mui/material";
  
  type PricingCardInfo = {
    tier: string,
    features: string[],
    price: string,

  }

const pricingCards: PricingCardInfo[] = [
    {
        tier: "Free",
        features: ["Professor Ratings", "Course Ratings", "6 assignments/year", "Professor Recommendations", "Course Recommendations", "", ""],
        price: "$0/year"
    },
    {
        tier: "Per-profile",
        features: ["Professor Ratings", "Course Ratings", "1, 3, or 5 assignments per course", "Professor Recommendations", "Course Recommendations", "AI Homework Help"],
        price: "Starting at $5/year per profile"
    },
    {
        tier: "Unlimited",
        features: ["Professor Ratings", "Course Ratings", "Unlimited views/year", "Professor Recommendations", "Course Recommendations", "AI Homework Help"],
        price: "$35/year"
    },

];
  

const Pricing = () => {
    return (
        <div className="flex flex-col justify-center items-center gap-4 h-[85vh] w-screen">
        <Typography variant="h1" className="text-primary-600 font-bold text-6xl">Pricing</Typography>
        <Typography variant="body1" className="text-secondary-900 font-semibold text-center -mt-4 w-[60vw]">
            Select from per-profile, or unlimited subscription plans to get access to homework solutions submitted by thousands of students across the country! Don't want to spend money? Well you earn money when we earn money! Upload your own coursework to gain access to other students' assignments.
             Try the free plan to explore how it works and decide for your self!  
        </Typography>
        <div className="flex flex-row justify-center items-center gap-4">
            {pricingCards.map((subscription) => (
                <Card className="w-[35vh] h-[50vh]">
                    <CardContent className="flex flex-col items-center">
                        <Typography variant="h2" className="text-primary-600 font-bold text-3xl my-6">{subscription.tier}</Typography>
                        {subscription.features.map(
                            feature => (<Typography variant="body1" className="text-secondary-700 font-medium text-md my-3">{feature}</Typography>)
                        )}
                        <Typography variant="h3" className="text-primary-600 font-semibold text-xl mt-6">{subscription.price}</Typography>                       
                    </CardContent>
                </Card>
            ))}
        </div>
      </div> 
        )
}

export default Pricing;