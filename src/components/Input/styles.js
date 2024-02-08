import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    padding: 15px;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    color: ${({ theme }) => theme.COLORS.GRAY_700};
    margin-bottom: 8px;
    border-radius: 10px;

    
    
    > input {
        flex: 1;
        height: 36px;
        

        padding: 12px;

        color: ${({ theme }) => theme.COLORS.WHITE};
        background: transparent;
        border: 0;

        &:placeholder{
            color: ${({ theme }) => theme.COLORS.GRAY_400};
        }

        > svg {
            margin-left: 16px;
        }

    }

`