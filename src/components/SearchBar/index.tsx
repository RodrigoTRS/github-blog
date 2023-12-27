import { useContext } from "react"
import { ProfileContext } from "../../contexts/ProfileContext"
import { SearchBarContainer, SearchBarHeader, SearchForm } from "./styles"

export function SearchBar() {

    const { profile } = useContext(ProfileContext)

    return (
        <SearchBarContainer>
            <SearchBarHeader>
                <h2>Publicações</h2>
                <span>{profile.public_repos} publicações</span>
            </SearchBarHeader>
            <SearchForm>
                <input
                    type="text"
                    placeholder="Buscar conteúdo"
                />
            </SearchForm>
        </SearchBarContainer>
    )
}