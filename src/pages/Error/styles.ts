import styled from "styled-components";
import { Link } from "react-router-dom";

export const ErrorContainer = styled.main`
    width: 100vw;
    height: 100vh;


    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0;

    font-family: 'Nunito', sans-serif;
    text-align: center;
    
    margin: -8px -8px -8px -8px;

    h1 {
        margin: 0;
    }
`

export const BackToHomeButton = styled(Link)`
    text-decoration: none;
    background: #071422;
    color: #AFC2D4;
    padding: 8px 16px;
    border-radius: 4px;
    transition: 0.2s;

    &:hover {
        background: #1C2F41;
    }

`