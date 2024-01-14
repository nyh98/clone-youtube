import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import PopularVideos from './components/main/PopularVideos';
import { QueryClient, QueryClientProvider } from 'react-query';

function App() {
  const queryClient = new QueryClient();
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
      errorElement: <>에러 페이지 만들자</>,
      children: [
        {
          path: '/',
          element: <PopularVideos />,
          errorElement: <>에러 페이지</>,
        },
      ],
    },
  ]);

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
