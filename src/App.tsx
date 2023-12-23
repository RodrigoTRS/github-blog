import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyles } from "./styles/global";
import { Profile } from "./pages/Profile";
import { ProfileProvider } from "./contexts/ProfileContext";

export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <ProfileProvider>
        <Profile />
      </ProfileProvider>
    </ThemeProvider>
  )
}
