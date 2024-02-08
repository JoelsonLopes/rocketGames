import styled from 'styled-components'
import { Link } from "react-router-dom";


export const Container = styled.div`
    position: fixed; 
    top: 0; 
    z-index: 10;
  

    
    grid-area: header;

    height: 105px;
    width: 91%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    border-bottom: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_700};

    > a {
        color: ${({ theme }) => theme.COLORS.ORANGE};
        font-size: 28px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        margin-right: 15px;
    }

`

export const Profile = styled(Link)`
    display: flex;
    align-items: center;
    

    > img {
       width: 56px;
       height: 56px;
       border-radius: 50%;
    }

    > div {
        display: flex;
        flex-direction: column;
        align-items: end;
        margin-right: 16px;
        line-height: 24px;

        button {
            border: none;
            background: none;
            font-size: 14px;
            color: ${({ theme }) => theme.COLORS.GRAY_400};
        }

        strong {
            margin-left: 15px;
            font-size: 18px;
            color: ${({ theme }) => theme.COLORS.WHITE};
            white-space: nowrap
        }
    }
`

