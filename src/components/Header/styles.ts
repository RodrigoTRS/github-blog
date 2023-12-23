import styled from "styled-components";

interface HeaderContainerProps {
    imageurl: string;
}

export const HeaderContainer = styled.header<HeaderContainerProps>`
    background-image: url(${props => props.imageurl});
    background-size: cover;
    padding: 4rem 0 7.5rem;
`

export const HeaderContent = styled.div`
    width: 100%;
    max-width: 1120px;
    margin: 0 auto;
    padding: 0 1.5rem;

    display: flex;
    justify-content: center;
    align-items: center;
`