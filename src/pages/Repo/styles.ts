import { Link } from "react-router-dom";
import styled from "styled-components";

export const RepoContainer = styled.main`
    max-width: 54rem;
    margin: -5.5rem auto 0;
`

export const RepoCardContainer = styled.div`
    width: 100%;
    padding: 2rem;
    border-radius: 10px;
    gap: 1.25rem;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    background: ${props => props.theme['base-profile']};
    box-shadow: 0 2px 28px 0 #00000020;

    h1 {
        color: ${props => props.theme['base-title']};
    }
`

export const RepoCardTitle = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const RepoCardTitleLink = styled(Link)`
    color: ${props => props.theme['blue']};
    font-weight: 700;
    font-size: 0.75rem;

    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.25rem 0.25rem;
    border-radius: 0.25rem;
    gap: 0.25rem;
`

export const RepoCardTitleAnchor = styled.a`
    color: ${props => props.theme['blue']};
    font-weight: 700;
    font-size: 0.75rem;

    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 0.5rem;
    border-radius: 0.25rem;
    gap: 0.5rem;
`

export const RepoCardFooter = styled.footer`
    display: flex;
    align-items: center;
    gap: 1.5rem;
`

export const RepoCardFooterIcon = styled.div`
    display: flex;
    gap: 0.5rem;
    align-items: center;
    color: ${props => props.theme['base-label']}
`

export const RepoDescriptionContainer = styled.section`
    display: flex;
    margin: 3rem auto;
`