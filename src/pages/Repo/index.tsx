import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom"
import { ReposContext } from "../../contexts/ReposContext";

export function Repo() {

    const { repoId } = useParams();
    const { fetchSpecifficRepo } = useContext(ReposContext)

    
    useEffect(() => {
        const repo = fetchSpecifficRepo(Number(repoId))
    }, [])

    return (
        <>
        </>
    )
}