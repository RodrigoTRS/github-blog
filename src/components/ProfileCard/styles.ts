import styled from "styled-components";

export const ProfileCardContainer = styled.div`
    width: 100%;
    padding: 2rem;
    border-radius: 10px;
    gap: 2rem;

    display: flex;
    justify-content: space-between;
    align-items: center;

    background: ${props => props.theme['base-profile']};
    box-shadow: 0 2px 28px 0 #00000020;

    img {
        width: 148px;
        height: 148px;
        border-radius: 0.5rem;
    }
`

export const ProfileText = styled.div`
    display: flex;
    flex-direction: column;

    h1 {
        color: ${props => props.theme['base-title']}
    }

    p, span {
        color: ${props => props.theme['base-text']}
    }
`
