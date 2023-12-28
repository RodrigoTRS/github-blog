import { ReactNode, createContext, useCallback, useEffect, useState } from "react";
import { api } from "../lib/axios";

interface GithubProfile {
    'name': string;
    'login': string;
    'avatar_url': string;
    'url': string;
    'bio': string;
    'followers': number;
    'company' ?: string;
    'public_repos': number;
    'repos_url': string;
}

interface ProfileContextType {
    profile: GithubProfile;
    loading: boolean;
}

interface ProfileContextProps {
    children: ReactNode;
}

export const ProfileContext = createContext({} as ProfileContextType)

export function ProfileProvider({children}: ProfileContextProps) {

    const [loading, setLoading] = useState(false);

    const [profile, setProfile] = useState<GithubProfile>({
        name: "",
        login: "",
        avatar_url: "",
        url: "",
        bio: "",
        followers: 0,
        public_repos: 0,
        repos_url: "",
    });

    
    const fetchProfile = useCallback(
        async () => {
            try {
                setLoading(true);
                const response = await api.get<GithubProfile>('');
                setProfile(response.data);
            } catch (error) {
                console.error(error)
            } finally {
                setTimeout(() => {
                    setLoading(false)
                }, 1500)
            }
        }, []
        )
        

    useEffect(() => {
        fetchProfile()
    }, [fetchProfile])

    return (
        <ProfileContext.Provider value={{profile, loading}}>
            {children}
        </ProfileContext.Provider>
    )
}