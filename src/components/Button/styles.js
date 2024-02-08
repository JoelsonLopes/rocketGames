import styled from "styled-components";

export const Container = styled.button`
    width: 100%;
    height: 50px;
    background-color: ${({ theme }) => theme.COLORS.ORANGE};
    color: ${({ theme }) => theme.COLORS.GRAY_400};

    border: 0;
    padding: 0 16px;
    margin-top: 16px;
    border-radius: 10px;
    font-weight: 500;

    &:disabled {
        opacity: 0.5;
    }
`