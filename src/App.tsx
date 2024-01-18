import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import PopularVideos from './pages/videos/PopularVideos';
import { QueryClient, QueryClientProvider } from 'react-query';
import ErrorPage from './pages/ErrorPage';
import VideoDetail from './pages/videos/VideoDetail';
import SearchVideos from './pages/videos/SearchVideos';
import SubscribePage from './pages/SubscribePage';

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        refetchOnMount: true,
        refetchOnReconnect: true,
      },
    },
  });
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: '/',
          element: <PopularVideos />,
        },
        {
          path: '/video/:videoId',
          element: <VideoDetail />,
        },
        {
          path: '/search/:keyWord',
          element: <SearchVideos />,
        },
        { path: '/subscribe', element: <SubscribePage /> },
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
