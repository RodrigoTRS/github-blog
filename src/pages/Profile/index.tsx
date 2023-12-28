import { ProfileCard } from "../../components/ProfileCard";
import { ReposGrid } from "../../components/ReposGrid";
import { SearchBar } from "../../components/SearchBar";
import { ProfileContainer } from "./styles";



export function Profile() {
    return (
        <>
            <ProfileContainer>
                <ProfileCard />
                <SearchBar />
                <ReposGrid />
            </ProfileContainer>
        </>
    )
}