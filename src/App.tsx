import React from 'react';
import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { Title } from './App.styled';
import { AppRoutes } from './routes/AppRoutes';

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Title>Hello World!</Title>
        <AppRoutes />
      </div>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
      git log --oneline
    </QueryClientProvider>
  );
}

export default App;
