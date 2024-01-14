import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import PopularVideos from './pages/videos/PopularVideos';
import { QueryClient, QueryClientProvider } from 'react-query';
import ErrorPage from './pages/ErrorPage';
import VideoDetail from './pages/videos/VideoDetail';

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
          element: <VideoDetail />,
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
