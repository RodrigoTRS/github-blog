import { useContext, useEffect } from "react";
import { ReposContext } from "../../contexts/ReposContext";
import { CardAnchor, CardTitle, RepoCard, RepoGridContainer } from "./styles";
import { Loader } from "../Loader";

export function ReposGrid() {

    const { repos, loading } = useContext(ReposContext)

    useEffect(() => {
        console.log(repos)
    }, [repos])

    return (
        <>
            {loading ? <Loader /> :
            <RepoGridContainer>
                {repos.map((repo) => {

                    const timeDiff = new Date().getTime() - new Date(repo.created_at).getTime();
                    const timeDifferenceInDays = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

                    if (repo.description) {
                        return (
                        <RepoCard key={repo.id}>
                            <CardTitle>
                                <CardAnchor to="/repo">
                                    {repo.name}
                                </CardAnchor>
                                <span>Há {timeDifferenceInDays} dias</span>
                            </CardTitle>
                            <p>{repo.description}</p>
                        </RepoCard>
                        )
                    }
                    })
                }
            </RepoGridContainer>
            }
        </>
    )
}