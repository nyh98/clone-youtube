import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import PopularVideos from './components/main/PopularVideos';
import { QueryClient, QueryClientProvider } from 'react-query';
import ErrorPage from './pages/ErrorPage';

function App() {
  const queryClient = new QueryClient();
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: '/',
          element: <PopularVideos />,
          errorElement: <ErrorPage />,
        },
        {
          path: '/video/:videoId',
          element: <>비디오 페이지</>,
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
