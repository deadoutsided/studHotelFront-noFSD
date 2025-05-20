import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "@components/Layouts/main-layout";
import MainPage from "@pages/main-page";
import AuthPage from "@pages/auth-page/auth-page";
import DormentoryInfoPage from "@pages/dormentory-info-page/dormentory-info-page";
import BookingRequestPage from "@pages/booking-request-page/booking-request-page";
import PersonalAccountPage from "@pages/personal-account-page/personal-account-page";
import TourismPage from "@pages/tourism-page/tourism-page";
import AdminLayout from "@components/Layouts/admin-layout/admin-layout";
import AdminAuthPage from "@pages/admin-auth-page/admin-auth-page";
import AdminBookingRequestPage from "@pages/admin-bookings-requests-page/admin-bookings-requests-page";

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
            },
            {
                path: '/booking-request',
                element: <BookingRequestPage />,
            },
            {
                path: '/personal-account/:tab',
                element: <PersonalAccountPage />
            },
            {
                path: '/tourism',
                element: <TourismPage />
            }
        ]
    },
    {
        errorElement: <div>ERRor?</div>,
        path: '/admin',
        element: <AdminLayout />,
        children: [
            {
                path: '/admin',
                element: <AdminAuthPage />
            },
            {
                path: '/admin/requests',
                element: <AdminBookingRequestPage />,
            },
        ]
    },
])