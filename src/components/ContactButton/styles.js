import styled from "styled-components";

export const ContactButton = styled.button`
    width: fit-content;
    border: none;
    padding: .5rem 0rem;
`;

export const linkButton = styled.a`
    text-decoration: none;
    padding: .5rem 1rem;
    color: ${({ theme }) => theme.color.primaryNormal};
    font-size: 1.1rem;
    transition: all .2s ease-in-out;

    @media(max-width: 768px){
        font-size: 1.5rem;
    }
`;