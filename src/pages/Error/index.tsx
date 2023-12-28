import { useRouteError } from "react-router-dom";
import { BackToHomeButton, ErrorContainer } from "./styles";
1

export function Error() {
    const error = useRouteError();
    console.error(error);

    return (
        <ErrorContainer>
            <h1>Vish... parece que ocorreu um erro!</h1>
            <p>Clique no botão abaixo para voltar para a página principal</p>
            <BackToHomeButton to={'/'}>Voltar a página principal</BackToHomeButton>
        </ErrorContainer>
    )
}