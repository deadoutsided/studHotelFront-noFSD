import { createBrowserRouter, RouterProvider } from "react-router";
import App from "../../App";
import MainLayout from "@components/Layouts/main-layout";
import MainPage from "@pages/main-page";

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
            }
        ]
    }
])