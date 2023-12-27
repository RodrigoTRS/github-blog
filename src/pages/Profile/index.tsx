import { Header } from "../../components/Header"
import { ProfileCard } from "../../components/ProfileCard";
import { SearchBar } from "../../components/SearchBar";
import { ProfileContainer } from "./styles";



export function Profile() {
    return (
        <>
            <Header />
            <ProfileContainer>
                <ProfileCard />
                <SearchBar />
            </ProfileContainer>
        </>
    )
}