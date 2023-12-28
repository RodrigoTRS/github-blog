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
        async () => {
            try {
                setLoading(true)
                const response = await api.get('/repos');
                setRepos(response.data)
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
        <ReposContext.Provider value={{repos, loading}}>
            {children}
        </ReposContext.Provider>
    )
}