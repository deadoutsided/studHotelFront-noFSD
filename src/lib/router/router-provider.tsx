import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "@components/Layouts/main-layout";
import MainPage from "@pages/main-page";
import AuthPage from "@pages/auth-page/auth-page";
import DormentoryInfoPage from "@pages/dormentory-info-page/dormentory-info-page";

export function BrowserRouter() {
    return <RouterProvider router={browserRouter}/>
}

const browserRouter = createBrowserRouter([
    {
        errorElement: <div>ERRor?</div>,
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <MainPage />
            },
            {
                path: '/auth',
                element: <AuthPage />
            },
            {
                path: '/info',
                element: <DormentoryInfoPage />
            }
        ]
    }
])