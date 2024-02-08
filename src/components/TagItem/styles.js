import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;

    background-color: ${({ theme, $isNew }) => $isNew ? "transparent" : theme.COLORS.GRAY_700};
    color: ${({ theme }) => theme.COLORS.GRAY_400};

    border: ${({ theme, $isNew }) => $isNew ? `1px dashed ${theme.COLORS.GRAY_400}` : "none"};

    margin-top: 8px;
    margin-left: 16px;
    border-radius: 10px;
    padding-right: 16px;

    height: 50px;

    > button {
        border: none;
        background: none;
        color: ${({ theme }) => theme.COLORS.ORANGE};
        font-size: 24px;
    }

    

    > input {
        height: 56px;
        width: 100%;

        padding: 12px;

        color: ${({ theme }) => theme.COLORS.WHITE};
        background: transparent;

        border: none;
        
        &::placeholder {
            color: ${({ theme }) => theme.COLORS.GRAY_400};
        }

    }
`