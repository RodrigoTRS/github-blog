import { ReactNode, createContext, useCallback, useEffect, useState } from "react";
import { api } from "../lib/axios";

interface GithubRepo {
    'id': number;
    'name': string;
    'created_at': string;
    'description': string;
    'owner': {
        'login': string;
    };
}

interface ReposContextType {
    repos: GithubRepo[];
    fetchRepos: (query?: string) => Promise<void>;
    fetchSpecifficRepo: (id: number) => Promise<GithubRepo | undefined>;
    loading: boolean;
}

interface ReposContextProps {
    children: ReactNode;
}

export const ReposContext = createContext({} as ReposContextType)



export function ReposProvider({children}: ReposContextProps) {

    const [repos, setRepos] = useState<GithubRepo[]>([]);
    const [loading, setLoading] = useState(false);


    const fetchRepos = useCallback(
        async (query?: string) => {
            try {
                setLoading(true)
                const response = await api.get<GithubRepo[]>('/repos');
                console.log(query)
                if (query) {
                    const filteredRepos = response.data.filter(repo => repo.name.includes(query));
                    setRepos(filteredRepos)
                } else {
                    setRepos(response.data)
                }
            } catch (error) {
                console.error(error)
            } finally {
                setTimeout(() => {
                    setLoading(false)
                }, 1000);
            }
        }, []
    )

    const fetchSpecifficRepo = useCallback(
        async (id: number) => {
            try {
                setLoading(true)
                const response = await api.get<GithubRepo[]>('/repos');
                const filteredRepo = response.data.filter(repo => repo.id === id);
                return filteredRepo[0];
            } catch (error) {
                console.error(error)
            } finally {
                setTimeout(() => {
                    setLoading(false)
                }, 1000);
            }
        }, []
    )
    
    useEffect(() => {
        fetchRepos()
    }, [fetchRepos])

    return (
        <ReposContext.Provider value={{repos, loading, fetchRepos, fetchSpecifficRepo}}>
            {children}
        </ReposContext.Provider>
    )
}