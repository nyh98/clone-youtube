import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import PopularVideos from './components/main/PopularVideos';

function App() {
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

  return <RouterProvider router={router} />;
}

export default App;
