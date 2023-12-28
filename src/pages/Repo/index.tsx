import { useContext } from "react";
import { useParams } from "react-router-dom"
import { ReposContext } from "../../contexts/ReposContext";
import { RepoCardContainer, RepoCardFooter, RepoCardFooterIcon, RepoCardTitle, RepoCardTitleAnchor, RepoCardTitleLink, RepoContainer, RepoDescriptionContainer } from "./styles";
import { Calendar, CaretLeft, Chat, GithubLogo, Link } from "phosphor-react";

export function Repo() {

    const { repoId } = useParams();
    const { repos } = useContext(ReposContext);
    const singleRepoArray = repos.filter(repo => repo.id === Number(repoId))
    const repo = singleRepoArray[0];
    const timeDiff = new Date().getTime() - new Date(repo.created_at).getTime();
    const timeDifferenceInDays = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

    return (
        <RepoContainer>
            <RepoCardContainer>
                <RepoCardTitle>
                    <RepoCardTitleLink to="/">
                        <CaretLeft size={12}/>
                        <span>VOLTAR</span>
                    </RepoCardTitleLink>
                    <RepoCardTitleAnchor
                        href={repo.url}
                        >
                        <span>VER NO GITHUB</span>
                        <Link size={12} />
                    </RepoCardTitleAnchor>
                </RepoCardTitle>
                <h1>{repo.name}</h1>
                <RepoCardFooter>
                    <RepoCardFooterIcon>
                        <GithubLogo size={18}/>
                        <span>{repo.owner.login}</span>
                    </RepoCardFooterIcon>
                    <RepoCardFooterIcon>
                        <Calendar size={18}/>
                        <span>Há {timeDifferenceInDays} dias</span>
                    </RepoCardFooterIcon>
                    <RepoCardFooterIcon>
                        <Chat size={18}/>
                        <span>0 comentários</span>
                    </RepoCardFooterIcon>
                </RepoCardFooter>
            </RepoCardContainer>
            <RepoDescriptionContainer>
                {repo.description}
            </RepoDescriptionContainer>
        </RepoContainer>
    )
}