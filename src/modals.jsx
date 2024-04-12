import NotificationModal from "./components/modals/NotificationModal"
import PostModal from "./components/modals/PostModal"
import ThemeModal from "./components/modals/ThemeModal"

const modals = [
    {
        name: 'theme',
        element: ThemeModal
    },
    {
        name: 'notifications',
        element: NotificationModal
    },
    {
        name: 'post',
        element: PostModal
    },
]
export default modals