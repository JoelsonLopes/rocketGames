import { Link } from "react-router-dom";
import styled from "styled-components";


export const Container = styled.div`
    padding: 0 85px;
    width: 100%;
    height: 100vh;


    display: grid;
    grid-template-areas: "header"
                         "content";
    grid-template-rows: 116px auto;

    > div {
        grid-area: content;
        display: flex;
        flex-direction: row;         
    }
    

`

export const Content = styled.div`
    display: flex;  
    justify-content: space-between ;
    align-items: start;
    flex-wrap: wrap;
    overflow-y: auto;

    &::-webkit-scrollbar {
            position: absolute;
            width: 10px;
            background: transparent;
            
    }
    &::-webkit-scrollbar-thumb {
            background: ${({ theme }) => theme.COLORS.ORANGE};
            border-radius: 20px;

            
    }


`

export const H1 = styled.div`
    margin-top: 40px;
    
`

export const ButtonContainer = styled(Link)`
   display: flex;
   flex-direction: row;

   > button {
    width: 215px;
    height: 50px;
    margin-top: 45px;
   }
`


export const CardContainer = styled(Link)`
    margin-top: 15px;
    overflow-y: auto;
    grid-area: content;
`

