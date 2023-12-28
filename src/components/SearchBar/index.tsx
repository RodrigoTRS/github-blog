import { useContext } from "react"
import { SearchBarContainer, SearchBarHeader, SearchForm } from "./styles"
import { ReposContext } from "../../contexts/ReposContext"
import * as z from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

const searchFormSchema = z.object({
    query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>;

export function SearchBar() {

    const { repos, fetchRepos } = useContext(ReposContext)

    const { register, handleSubmit } = useForm<SearchFormInputs>({
        resolver: zodResolver(searchFormSchema),
    })


    async function handleSearchRepos(data: SearchFormInputs) {
        await fetchRepos(data.query)
    }

    return (
        <SearchBarContainer>
            <SearchBarHeader>
                <h2>Publicações</h2>
                <span>{repos.length} publicações</span>
            </SearchBarHeader>
            <SearchForm onSubmit={handleSubmit(handleSearchRepos)}>
                <input
                    type="text"
                    placeholder="Buscar conteúdo"
                    {...register('query')}
                />
            </SearchForm>
        </SearchBarContainer>
    )
}