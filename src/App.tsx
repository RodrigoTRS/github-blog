import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyles } from "./styles/global";
import { Profile } from "./pages/Profile";
import { ProfileProvider } from "./contexts/ProfileContext";
import {Route, RouterProvider, Routes, createBrowserRouter} from "react-router-dom"
import { Error } from "./pages/Error";
import { ReposProvider } from "./contexts/ReposContext";
import { Repo } from "./pages/Repo";

const router = createBrowserRouter([
  {
    path: "*",
    element: <Root />,
    errorElement: <Error />
    // TODO: Configure outlet here for Outlet using on Header
 },
])

export function App() {
  return <RouterProvider router={router}/>
}

export function Root() {

  return (

    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <ProfileProvider>
      <ReposProvider>
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/repo" element={<Repo />} />
        </Routes>
      </ReposProvider>
      </ProfileProvider>
    </ThemeProvider>
  )
}
