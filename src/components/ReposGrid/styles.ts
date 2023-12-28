import { Link } from "react-router-dom";
import styled from "styled-components";

export const RepoGridContainer = styled.section`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;

    margin: 3rem auto;
`

export const RepoCard = styled.div`
    height: 260px;
    padding: 32px;
    background: ${props => props.theme['base-post']};

    display: flex;
    flex-direction: column;
    gap: 1.25rem;

    border-radius: 0.625rem;

    p {
        font-size: 1rem;
        font-weight: 400;
        color: ${props => props.theme['base-text']}
    }
`

export const CardTitle = styled.div`
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 2rem;

    span {
        color: ${props => props.theme['base-span']};
        font-size: 0.875rem;
    }
`

export const CardAnchor = styled(Link)`
    flex: 1;
    font-size: 1.25rem;
    font-weight: 700;
    text-align: left;
    color: ${props => props.theme['base-title']};

    &:hover {
        color: ${props => props.theme['blue']}
    }
`
