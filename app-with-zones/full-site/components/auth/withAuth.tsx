'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { ComponentType } from 'react';

export function withAuth<P extends object>(WrappedComponent: ComponentType<P>) {
  const ProtectedComponent: ComponentType<P> = (props: P) => {
    const router = useRouter();
    const [authorized, setAuthorized] = useState(false);

    useEffect(() => {
      const token = localStorage.getItem('token');

      if (!token) {
        router.replace('/'); // redireciona se não estiver logado
      } else {
        setAuthorized(true);
      }
    }, [router]);

    if (!authorized) {
      return (
        <div className="flex justify-center items-center h-full">
          Carregando...
        </div>
      );
    }

    return <WrappedComponent {...props} />;
  };

  return ProtectedComponent;
}
