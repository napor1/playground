import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from '../App';
import IconSelector from '@/examples/IconSelector';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'icon-selector',
        element: <IconSelector />,
      },
    ],
  },
]);

const BrowserRouter = () => {
  return <RouterProvider router={router} />;
};

export default BrowserRouter;
