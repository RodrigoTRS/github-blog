import { HeaderContainer, HeaderContent } from "./styles";
import Logo from '../../assets/blog-logo.svg'
import Cover from '../../assets/cover-img.jpg'


export function Header() {
    return (
        <HeaderContainer imageurl={Cover}>
            <HeaderContent>
                <img src={Logo} alt="" />
            </HeaderContent>
        </HeaderContainer>
    )
}