import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './pages/Home';
import Choose from './pages/Choose';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/choose',
    element: <Choose />,
  },
]);

function App() {
  return (
    <div className='App'>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
