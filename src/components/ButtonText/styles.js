import styled from "styled-components"
import { Link } from "react-router-dom";


export const Container = styled(Link)`
    background: none;
    color: ${({ theme }) => theme.COLORS.ORANGE};
    border: none;
    font-size: 16px;
    font-weight: 400;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 5px;
    height: 15px;
    margin-top: 10px;

    > svg {
        font-size: 20px;
    }
`