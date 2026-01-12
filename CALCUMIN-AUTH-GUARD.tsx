import { useEffect, useState, ReactNode, useRef } from 'react';
import { User, onAuthStateChanged } from 'firebase/auth';
import { auth } from './config/firebase'; // Ajusta la ruta según tu estructura

interface AuthGuardProps {
  children: ReactNode;
  loginUrl?: string;
}

/**
 * Componente que protege rutas/componentes requiriendo autenticación
 * Si el usuario no está logueado, redirige al login
 * Si está logueado, muestra el contenido protegido SIN redirigir
 */
export const AuthGuard = ({ children, loginUrl = 'https://flavio1227.github.io/Login/' }: AuthGuardProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const hasRedirected = useRef(false); // Prevenir redirecciones múltiples

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (currentUser) => {
        setUser(currentUser);
        setLoading(false);
        
        // Si no hay usuario Y aún no hemos redirigido, redirigir al login
        if (!currentUser && !hasRedirected.current) {
          hasRedirected.current = true;
          // Guardar la URL actual para redirigir después del login
          const currentUrl = window.location.href;
          window.location.href = `${loginUrl}?redirect=${encodeURIComponent(currentUrl)}`;
        }
        // Si HAY usuario, NO hacer nada - solo mostrar el contenido
        // NO redirigir a ningún lado si el usuario está autenticado
      },
      (error) => {
        console.error('Error de autenticación:', error);
        setLoading(false);
        // En caso de error, solo redirigir si no hemos redirigido ya
        if (!hasRedirected.current) {
          hasRedirected.current = true;
          window.location.href = loginUrl;
        }
      }
    );

    return unsubscribe;
  }, [loginUrl]);

  // Mostrar loading mientras se verifica la autenticación
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-slate-600 border-t-blue-500 rounded-full animate-spin mx-auto mb-4" />
          <p className="text-slate-400">Verificando autenticación...</p>
        </div>
      </div>
    );
  }

  // Si no hay usuario, no mostrar nada (ya se está redirigiendo)
  if (!user) {
    return null;
  }

  // Si hay usuario, mostrar el contenido protegido
  return <>{children}</>;
};
