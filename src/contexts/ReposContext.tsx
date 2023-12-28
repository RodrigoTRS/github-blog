import { ReactNode, createContext, useCallback, useEffect, useState } from "react";
import { api } from "../lib/axios";

interface GithubRepo {
    'id': number;
    'name': string;
    'created_at': string;
    'description': string;
    'url': string;
    'owner': {
        'login': string;
    };
}

interface ReposContextType {
    repos: GithubRepo[];
    fetchRepos: (query?: string) => Promise<void>;
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
    
    useEffect(() => {
        fetchRepos()
    }, [fetchRepos])

    return (
        <ReposContext.Provider value={{repos, loading, fetchRepos}}>
            {children}
        </ReposContext.Provider>
    )
}