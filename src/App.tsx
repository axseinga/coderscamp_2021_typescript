import React from 'react';
import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { AppRoutes } from './routes/AppRoutes';
import { AuthProvider } from './context/authContext';

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <AppRoutes />
        <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
