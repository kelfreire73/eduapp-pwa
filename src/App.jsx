import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { PrivateRoute, AdminRoute, PublicRoute } from './components/PrivateRoute';
import Login from './pages/Login';
import Registro from './pages/Registro';
import Dashboard from './pages/Dashboard';
import AdminPanel from './pages/AdminPanel';
import RecuperarSenha from './pages/RecuperarSenha';

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          
          <Route path="/login" element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          } />
          
          <Route path="/registro" element={
            <PublicRoute>
              <Registro />
            </PublicRoute>
          } />
          
          <Route path="/recuperar-senha" element={
            <PublicRoute>
              <RecuperarSenha />
            </PublicRoute>
          } />
          
          <Route path="/dashboard" element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          } />
          
          <Route path="/admin" element={
            <AdminRoute>
              <AdminPanel />
            </AdminRoute>
          } />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}
