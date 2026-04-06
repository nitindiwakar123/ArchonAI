import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Protect = ({ children }) => {
    console.log("Protect component rendered, checking authentication...");
    const user = useSelector((state) => state.user.userInfo);
    console.log("Current user from Redux state:", user);

    if (!user) {
        console.log("User not authenticated, redirecting to login.");
        return <Navigate to="/login" replace />;
    }

    return children;
};

export default Protect;