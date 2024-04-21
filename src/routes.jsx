import Home from "./pages/layout/index";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Messages from "./pages/layout/Messages";
import Profile from "./pages/layout/Profile"
import MainLayout from "./pages/layout/MainLayout";

export const routes = [
    {
        path: '/',
        element: <MainLayout/>,
        children: [
            {
                index: true,
                element: <Home/>
            },
            {
                path: 'messages',
                element: <Messages/>
            },
            {
                path: 'profile',
                element: <Profile/>
            },
        ]
    },
    {
        path: '/signup',
        element: <Signup/>
    },
    {
        path: '/login',
        element: <Login/>
    },
]