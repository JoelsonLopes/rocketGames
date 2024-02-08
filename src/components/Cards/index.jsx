import PropTypes from "prop-types";

import { Container } from './styles'
import { Tag } from "../Tag";
import { Rating } from "../Rating";

export function Card({ data, ...rest}) {
    return(
        <Container {...rest}>
            <h2>{data.title}</h2>
            <Rating grade={data.rating} $isBigSize={false} />
            <p>{data.description}</p> 
            {data.tags && (
                <footer>
                    {data.tags.map(tag => (
                        <Tag title={tag.name} key={tag.id} />
                    ))}
                </footer>
            )}
        </Container>
    )
}

Card.propTypes = {
    data: PropTypes.shape({
        title: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired,
        description: PropTypes.string.isRequired, 
        tags: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
            name: PropTypes.string.isRequired,
        })),
    }),    
};
