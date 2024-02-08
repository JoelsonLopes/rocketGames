import styled from "styled-components";

export const Container = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    align-content: center;
    height: 30px;
    font-size: 12px;
    padding: 5px 14px;
    border-radius: 8px;
    margin-right: 6px;
    color: ${({ theme }) => theme.COLORS.GRAY_400};
    background-color: ${({ theme }) => theme.COLORS.GRAY_700};
`