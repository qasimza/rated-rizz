type BaseTemplateType = {
    navbarComponent: JSX.Element
    pageComponent: JSX.Element
    
}

const BaseTemplate = (props: BaseTemplateType) => {
    return (
        <div className="flex flex-col content-center items-center gap-2 bg-gray-100">
            {props.navbarComponent}
            {props.pageComponent}
        </div>
    )
};

export default BaseTemplate;