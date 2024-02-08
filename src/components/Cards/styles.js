import styled from "styled-components";

export const Container = styled.button`
    width: 100%;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
    border: none;
    border-radius: 10px;

    padding: 22px;
    margin-bottom: 16px;

    > h2 {
        flex: 1;
        text-align: left;
        font-weight: 700;
        font-size: 24px;
        color: ${({ theme }) => theme.COLORS.WHITE};
    }

    > p {
        margin-top: 1rem;
        text-align: justify;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        
        color: ${({ theme }) => theme.COLORS.GRAY_500};
    }

    > footer {
        width: 100%;
        display: flex;
        margin-top: 24px;
    }

`