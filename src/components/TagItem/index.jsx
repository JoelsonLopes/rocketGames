import PropTypes from "prop-types";

import { FiPlus, FiX } from 'react-icons/fi'

import { Container } from './styles'

export function TagItem({ $isNew, value, onClick, ...rest}){
    return (
        <Container $isNew={$isNew}>
            <input
            type="text"
            value={value}
            readOnly={!$isNew}
            { ...rest}
            />

            <button
            type="button"
            onClick={onClick}
            >
                { $isNew ? <FiPlus /> : <FiX />}
            </button>

        </Container>
    )
}

TagItem.propTypes = {
    $isNew: PropTypes.bool, 
    value: PropTypes.string, 
    onClick: PropTypes.func, 
};