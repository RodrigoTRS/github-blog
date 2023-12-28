import styled from "styled-components";

export const LoaderContainer = styled.div`
    width: 100%;
    padding: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const LoaderSpinner = styled.div`
    animation-name: spin;
    animation-duration: 1500ms;
    animation-iteration-count: infinite;
    animation-timing-function: linear; 
    transform-origin: center center;

    svg {
        line-height: 0;
    }

    @keyframes spin {
        from {
            transform:rotate(0deg);
        }
        to {
            transform:rotate(360deg);
        }
    }
`