import {styled} from "styled-components";

export const sectionBody = styled.section`
    width: 100%;
    /* padding: 10rem 0; */
    background: url(${({ bg }) => bg});
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
`;

export const SectionContainer = styled.div`
    max-width: 1080px;
    margin: 0 auto;
    display:flex;
    justify-content: space-around;
    align-items: center;
    padding: 16rem 0;
    

    @media screen and (max-width: 768px){
        
    }
`;

export const SectionContent = styled.a`
    max-width: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    color: ${({ theme }) => theme.color.primaryDark};
    background: ${({ theme }) => theme.color.backgroundDark};
    padding: 2rem 4rem;
    cursor: pointer;
    text-decoration: none;
    transition: all .5s ease-in-out;

    &:hover{
        background: ${({ theme }) => theme.color.primaryDark};
        color: ${({ theme }) => theme.color.backgroundDark};
        scale: 1.1;
    }
`;

export const SectionText = styled.p`
    font-size: 2rem;
`;