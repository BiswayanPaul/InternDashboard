import { Routes, Route, Link } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Leaderboard from './components/Leaderboard';
import AddInternForm from './components/AddInternForm';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import ChangePassword from './components/ChangePassword';
import PrivateRoutes from './components/PrivateRoutes';
import { useAuth } from './hook/useAuth';

export default function App() {
  const { isLoggedIn, logout } = useAuth();

  return (
    <div className="h-screen flex flex-col bg-gray-100 overflow-hidden">
      {/* Header */}
      <header className="bg-white shadow-md p-4 shrink-0">
        <nav className="flex justify-center gap-6 text-blue-600 font-medium">
          <Link to="/">Home</Link>
          <Link to="/leaderboard">Leaderboard</Link>
          {isLoggedIn ? (
            <>
              <Link to="/dashboard">Dashboard</Link>
              <Link to="/add-intern">Add Intern</Link>
              <Link to="/change-password">Change Password</Link>
              <button onClick={logout} className="text-red-500 hover:underline">Logout</button>
            </>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link to="/signup">Signup</Link>
            </>
          )}
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          <Route element={<PrivateRoutes />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/add-intern" element={<AddInternForm />} />
            <Route path="/change-password" element={<ChangePassword />} />
          </Route>

          <Route path="*" element={<p className="text-center">404 - Page Not Found</p>} />
        </Routes>
      </main>
    </div>
  );
}
