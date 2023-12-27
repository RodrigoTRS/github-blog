import styled from "styled-components"

export const SearchBarContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 4rem;
`
export const SearchBarHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    h2 {
        font-size: 1.125rem;
    }

    span {
        font-size: 0.875rem;
        color: ${props => props.theme['base-span']};
    }
`
export const SearchForm = styled.form`
    input {
        padding: 16px;
        background: ${props => props.theme['base-input']};
        border: 2px solid ${props => props.theme['base-border']};
        border-radius: 6px;
        width: 100%;

        &::placeholder {
            color: ${props => props.theme['base-label']};
        }
    }
`