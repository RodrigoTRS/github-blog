import { Header } from "../../components/Header"
import { ProfileCard } from "../../components/ProfileCard";
import { ProfileContainer } from "./styles";



export function Profile() {
    return (
        <>
            <Header />
            <ProfileContainer>
                <ProfileCard />
            </ProfileContainer>
        </>
    )
}