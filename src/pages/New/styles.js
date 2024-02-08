import styled from "styled-components"



export const Container = styled.div`
    padding: 0 85px;
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-areas: "header"
                         "content";
    grid-template-rows: 116px auto;

    .tags {
        min-height: 88px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        flex-wrap: wrap;
        margin-top: 45px;
        
        background: ${({ theme }) => theme.COLORS.BACKGROUND_900};

        border-radius: 10px;
    }

    .button {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 35px;
        gap: 15px;

        :first-child  {
            background: ${({ theme }) => theme.COLORS.BACKGROUND_900};
            color: ${({ theme }) => theme.COLORS.ORANGE};
        }

        :nth-child(2) {
            color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
        }
    }


    > main {
        grid-area: content;
        overflow-y: auto;
        padding: 25px 0;

        p {
            margin-top: 40px;
            color: ${({ theme }) => theme.COLORS.GRAY_600};
            font-size: 20px;
        }

        
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

export const Form = styled.form`

    > h1 {
        margin-top: 15px;
    }

    > div {
        display: flex;
        flex-direction: row;
        margin-top: 40px;
        gap: 12px
    }
    
`
export const TextArea = styled.textarea`
    width: 100%;
    height: 175px;    
    
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    color: ${({ theme }) => theme.COLORS.WHITE};    

    padding: 15px;
    margin-top: 40px;
    margin-bottom: 8px;

    border-radius: 10px;

    border: none;
    resize: none;
    
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