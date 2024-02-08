import styled from "styled-components"



export const Container = styled.div`
    padding: 0 85px;
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-areas: "header"
                         "content";
    grid-template-rows: 116px auto;


    > main {
        grid-area: content;
        margin-top: 40px;
        overflow-y: auto;
        padding: 64px 0;

        
        &::-webkit-scrollbar {
            position: absolute;
            width: 10px;
            background: transparent;
            
        }
        &::-webkit-scrollbar-thumb {
            background: ${({ theme }) => theme.COLORS.ORANGE};
            border-radius: 20px;
        }
    }
`;

export const TitleAndNote = styled.div`
    display: flex;
    align-items: center;
    margin-top: 24px;
    
    

    > h1 {
        margin-right: 15px;
        font-size: 36px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
    }

    > svg {
        font-size: 24px;
        color: ${({ theme }) => theme.COLORS.ORANGE};
    }
    
`

export const ProfileAndTime = styled.div`
    margin-top: 24px;
    gap: 8px;

    > img {
        margin-right: 8px;
        width: 18px;
        border-radius: 50%;
    }

    > svg {
        color: ${({ theme }) => theme.COLORS.ORANGE};
    }

    > span {
        margin: 0 8px;
    }

`
export const Tags = styled.div`
    display: flex;
    margin: 24px 0 40px 0;
    

`

export const Content = styled.div`
    margin: 0 auto;


    display: flex;
    flex-direction: column;

    > p {
    text-align: justify;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    }




`
