import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { MainLayout } from './components/layout/MainLayout/MainLayout';
import { Home } from './components/pages/Home/Home';
import { SampleComponent } from './reactQueryTools/SampleComponent';
import { Title } from './App.styled';

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        {/* <SampleComponent /> */}
        <BrowserRouter>
          <MainLayout>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </MainLayout>
        </BrowserRouter>
      </div>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
}

export default App;
