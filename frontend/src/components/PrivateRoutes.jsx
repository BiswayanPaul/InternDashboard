import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../hook/useAuth';

export default function PrivateRoutes() {
    const { isLoggedIn } = useAuth();
    return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
}
