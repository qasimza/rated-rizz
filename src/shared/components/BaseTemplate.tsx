import { Stack } from "@mui/material";

type BaseTemplateType = {
    navbarComponent: JSX.Element
    pageComponent: JSX.Element
    
}

const BaseTemplate = (props: BaseTemplateType) => {
    return (
        <Stack
            direction="column" 
            justifyContent="center"
            alignItems="center"
            rowGap={2}
            className="bg-gray-100"
            >
            {props.navbarComponent}
            {props.pageComponent}
        </Stack>
    )
};

export default BaseTemplate;