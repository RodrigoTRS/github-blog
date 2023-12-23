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
}

interface ProfileContextType {
    profile: GithubProfile;
}

interface ProfileContextProps {
    children: ReactNode;
}

export const ProfileContext = createContext({} as ProfileContextType)

export function ProfileProvider({children}: ProfileContextProps) {
    
    const [profile, setProfile] = useState<GithubProfile>({
        name: "",
        login: "",
        avatar_url: "",
        url: "",
        bio: "",
        followers: 0
    });

    const fetchProfile = useCallback(
        async () => {
            const response = await api.get<GithubProfile>('RodrigoTRS');
            console.log(response.data)
            setProfile(response.data);
        }, []
    )

    useEffect(() => {
        fetchProfile()
    }, [fetchProfile])

    return (
        <ProfileContext.Provider value={{profile}}>
            {children}
        </ProfileContext.Provider>
    )
}