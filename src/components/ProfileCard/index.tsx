import { useContext } from "react";
import { GitHubLink, ProfileCardContainer, ProfileContent, ProfileFooter, ProfileFooterIcon, ProfileHeader, ProfileText } from "./styles";
import { ProfileContext } from "../../contexts/ProfileContext";
import { Buildings, GithubLogo, Link, Users } from "phosphor-react";

export function ProfileCard() {

    const { profile } = useContext(ProfileContext)

    return (
        <ProfileCardContainer>

            <img src={profile.avatar_url} alt="" />

            <ProfileContent>
                
                <ProfileText>

                    <ProfileHeader>
                        <h1>{profile.name}</h1>
                        <GitHubLink
                            href={profile.url}
                            >
                            GITHUB
                            <Link size={12} />
                        </GitHubLink>
                    </ProfileHeader>

                    <p>{profile.bio}</p>

                </ProfileText>

                <ProfileFooter>

                    <ProfileFooterIcon>
                        <GithubLogo size={18}/>
                        <span>{profile.login}</span>
                    </ProfileFooterIcon>

                    { profile.company && 
                        <ProfileFooterIcon>
                            <Buildings size={18}/>
                            <span>{profile.company}</span>
                        </ProfileFooterIcon>
                    }

                    <ProfileFooterIcon>
                        <Users size={18}/>
                        <span>{profile.followers} seguidores</span>
                        
                    </ProfileFooterIcon>

                </ProfileFooter>

            </ProfileContent>

        </ProfileCardContainer>
    )
}