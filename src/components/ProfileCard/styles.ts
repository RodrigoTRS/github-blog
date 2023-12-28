import styled from "styled-components";

export const ProfileCardContainer = styled.div`
    width: 100%;
    padding: 2rem;
    border-radius: 10px;
    gap: 2rem;

    display: flex;
    justify-content: space-between;

    background: ${props => props.theme['base-profile']};
    box-shadow: 0 2px 28px 0 #00000020;

    img {
        width: 148px;
        height: 148px;
        border-radius: 0.5rem;
    }
`

export const ProfileContent = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const ProfileText = styled.div`
    display: flex;
    flex-direction: column;

    h1 {
        font-weight: 700;
        font-size: 1.5rem;
        color: ${props => props.theme['base-title']}
    }

    p, span {
        color: ${props => props.theme['base-text']}
    }
`

export const ProfileHeader = styled.header`
    display: flex;
    justify-content: space-between;
    margin: 0.5rem 0;
`

export const GitHubLink = styled.a`
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

export const ProfileFooter = styled.footer`
    display: flex;
    align-items: center;
    gap: 1.5rem;
`

export const ProfileFooterIcon = styled.div`
    display: flex;
    gap: 0.5rem;
    align-items: center;

    svg {
        color: ${props => props.theme['base-label']}
    }
`
