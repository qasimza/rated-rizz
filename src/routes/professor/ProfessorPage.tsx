import { Avatar, Card, CardContent, Chip, Divider, Stack, Typography } from "@mui/material";
import { ProfessorType, getProfessor } from "../../services/search";
import SearchBar from "../../shared/components/Searchbar";
import BaseTemplate from "../../shared/components/BaseTemplate";
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import GradeIcon from '@mui/icons-material/Grade';

type ReviewCardInfo = {
    review: string
    rating?: number
    tags: string[]
}

const ReviewCard = (props:ReviewCardInfo) => {
    return (
        <Card className="w-144">
        <CardContent className="flex flex-row gap-5">
            <Avatar className="bg-primary-600 text-white font-bold text-4xl w-20 h-20">
                {props.rating}
            </Avatar>
            <div className="flex flex-col w-full gap-2 mt-4">
            <Typography>{props.review}</Typography>
            <Divider /> 
            {
                props.tags.map((tag) => <Chip icon={<SentimentSatisfiedAltIcon />} label={tag} className=""/>)
            }
            </div>   
        </CardContent>
        </Card>
        )
}

const ReviewsComponent = (props: {reviews: string[]}) => {
    return (
        <div className="flex min-w-[50%] justify-left flex-col gap-4">
        <Typography variant="h2" className="text-primary-600 font-normal tracking-widest text-xl ">
            REVIEWS
        </Typography>
        {props.reviews.map((review) => <ReviewCard review={review} rating={3.6} tags={["easy", "helpful", "slow-paced"]}/>)}
    </div>
    )
}

const ProfessorSummaryComponent = (props: {professor: ProfessorType}) => {
    return (
        <div className="flex min-w-[50%] justify-left flex-col gap-4">
            <div className="flex flex-row gap-5">
                <Avatar className="bg-primary-600 w-20 h-20">
                    <GradeIcon className="text-6xl" />
                </Avatar>    
                <Typography variant="h1" className="text-primary-600 font-bold text-3xl mt-20 text-nowrap">
                    {props.professor.overall_rating} / 5.0 (overall)
                </Typography>
            </div>
            <div>
                <Typography variant="h2" className="text-primary-600 font-bold text-6xl mt-20 text-nowrap">
                    {props.professor.name}
                </Typography>
            </div>
        </div>
    )
}

const PageComponent = () => {
    const professor = getProfessor(1);
    return (
        <Stack 
        direction="row" 
        justifyContent="center"
        alignItems="center"
        columnGap={4}
        >
            <ReviewsComponent reviews={professor.reviews}/>
            <ProfessorSummaryComponent professor={professor} />
        </Stack>
    )
}

const ProfessorPage = () => {
    return (
        <BaseTemplate navbarComponent={<SearchBar />} pageComponent={<PageComponent />} />
    )
}

export default ProfessorPage;