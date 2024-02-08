import { Container } from "./styles"
import PropTypes from "prop-types";
import { RiArrowLeftLine } from "react-icons/ri";



export function ButtonText({ title, ...rest }) {
    return (
        <Container
        type="button" 
        {...rest}
        >
        <RiArrowLeftLine />
            {title}
        </Container>
    )
}

ButtonText.propTypes = {
    title: PropTypes.string,
}    