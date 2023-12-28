import { LoaderContainer, LoaderSpinner } from "./styles"
import { SpinnerGap } from "phosphor-react"

export function Loader() {
    return (
        <LoaderContainer>
            <LoaderSpinner>
                <SpinnerGap size={24} />
            </LoaderSpinner>
        </LoaderContainer>
    )
}