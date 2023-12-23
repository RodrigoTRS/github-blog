import { useContext } from "react";
import { ProfileCardContainer, ProfileText } from "./styles";
import { ProfileContext } from "../../contexts/ProfileContext";

export function ProfileCard() {

    const { profile } = useContext(ProfileContext)

    return (
        <ProfileCardContainer>
            <img src={profile.avatar_url} alt="" />
            <ProfileText>
                <h1>{profile.name}</h1>
                <p>{profile.bio}</p>
            </ProfileText>
            
        </ProfileCardContainer>
    )
}