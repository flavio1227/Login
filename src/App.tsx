import { useEffect } from 'react';
import { useAuth } from './context/AuthContext';
import LoginForm from './components/LoginForm';
import { SHELL_URL } from './config/constants';

function App() {
  const { user, loading } = useAuth();

  useEffect(() => {
    if (!loading && user) {
      window.location.href = SHELL_URL;
    }
  }, [user, loading]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-slate-600 border-t-blue-500 rounded-full animate-spin mx-auto mb-4" />
          <p className="text-slate-400">Verificando autenticación...</p>
          <p className="text-slate-500 text-sm mt-2">Si esto tarda mucho, verifica la consola del navegador (F12)</p>
        </div>
      </div>
    );
  }

  if (user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-slate-600 border-t-blue-500 rounded-full animate-spin mx-auto mb-4" />
          <p className="text-slate-400">Redirigiendo...</p>
        </div>
      </div>
    );
  }

  return <LoginForm />;
}

export default App;
