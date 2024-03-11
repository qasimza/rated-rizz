import { Avatar, Box, Card, CardContent, Chip, Divider, Stack, Typography } from "@mui/material";
import { ProfessorType, getProfessor } from "../../services/search";
import SearchBar from "../../shared/components/Searchbar";
import BaseTemplate from "../../shared/components/BaseTemplate";
import GradeIcon from '@mui/icons-material/Grade';

type ReviewCardInfo = {
    review: string
    rating?: number
    tags: string[]
}

const RatingCount = (props: {bucket: number, count: number}) => {
    return (
        <div className="flex flex-row gap-3">
            <Box className="bg-primary-600 h-12 w-12 text-center">
            <Typography className="text-white font-bold text-3xl">{props.bucket}+</Typography>
            </Box>
            <Typography className="text-secondary-800 text-3xl">{props.count}</Typography>
        </div>
    )
}

const RatingCounts = () => {
    return (
        <div className="flex flex-row items-center justify-evenly gap-2">            
            {[0, 1, 2, 3 ,4].map(bucket => <RatingCount bucket={bucket} count={2*bucket} />)}
        </div>
    )
}

const ReviewCard = (props:ReviewCardInfo) => {
    return (
        <Card className="w-144">
        <CardContent className="flex flex-row gap-5 m-2">
            <Avatar className="bg-primary-600 text-white font-bold text-4xl w-20 h-20">
                {props.rating}
            </Avatar>
            <div className="flex flex-col w-full gap-2 mt-4">
            <Typography>{props.review}</Typography>
            <Divider /> 
                <div className="flex flex-row gap-2">
                {
                    props.tags.map((tag) => <Chip label={'#'+tag.toUpperCase()} className="bg-blue-400 text-white font-bold text-sm"/>)
                }
                </div>
            </div>   
        </CardContent>
        </Card>
        )
}

const ReviewsList = (props: {reviews: string[]}) => {
    return (
        <div className="flex min-w-[50%] justify-left flex-col gap-4">
        <Typography variant="h2" className="text-primary-600 font-normal tracking-widest text-xl ">
            REVIEWS
        </Typography>
        <RatingCounts />
        {props.reviews.map((review) => <ReviewCard review={review} rating={3.6} tags={["easy", "helpful", "slow-paced"]}/>)}
    </div>
    )
}

const ProfessorCard = (props: {professor: ProfessorType}) => {
    return (
        <Card className="w-144">
        <CardContent className="flex flex-col gap-5 w-full items-center">
            <div className="flex flex-row items-center gap-5">
            <Avatar className="bg-primary-600 text-white font-bold w-20 h-20">
                <GradeIcon className="text-6xl" />
            </Avatar>
            <Typography variant="h1" className="text-primary-600 font-bold text-3xl">
                {props.professor.overall_rating} / 5.0 <span className="font-normal">(overall)</span>
                <div className="text-secondary-600 font-semibold text-lg">{props.professor.reviews.length} RATINGS</div>
            </Typography>
            </div>
            <Typography variant="h1" className="text-primary-600 font-bold text-3xl">
                {props.professor.name} 
            </Typography>
        </CardContent>
        </Card>
        )
}

const PageComponent = () => {
    const professor = getProfessor(1);
    return (
        <Stack 
        direction="row" 
        justifyContent="center"
        columnGap={4}
        >
            <ReviewsList reviews={professor.reviews}/>
            <ProfessorCard professor={professor} />
        </Stack>
    )
}

const ProfessorPage = () => {
    return (
        <BaseTemplate navbarComponent={<SearchBar />} pageComponent={<PageComponent />} />
    )
}

export default ProfessorPage;