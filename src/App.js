import { createContext, useCallback, useMemo, useReducer } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './pages/Home';
import Choose from './pages/Choose';

import './styles/App.css';

export const ModalStateContext = createContext(null);
export const ModalDispatchContext = createContext(null);

export const ToiletInfoStateContext = createContext(null);
export const ToiletInfoDispatchContext = createContext(null);

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

const reducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE': {
      return !state;
    }
    default: {
      return state;
    }
  }
};

const reducer2 = (state, action) => {
  switch (action.type) {
    case 'UPDATE': {
      return action.content;
    }
    default:
      return state;
  }
};

function App() {
  const [modalOpen, dispatch] = useReducer(reducer, false);
  const [toiletInfo, dispatch2] = useReducer(reducer2, []);

  const onToggle = useCallback(() => {
    dispatch({
      type: 'TOGGLE',
    });
  });

  const onUpdate = useCallback((content) => {
    dispatch2({
      type: 'UPDATE',
      content,
    });
  });

  const memoizedDispatches = useMemo(() => {
    return { onToggle };
  }, []);

  const memoizedDispatches2 = useMemo(() => {
    return { onUpdate };
  }, []);

  return (
    <ModalStateContext.Provider value={modalOpen}>
      <ModalDispatchContext.Provider value={memoizedDispatches}>
        <ToiletInfoStateContext.Provider value={toiletInfo}>
          <ToiletInfoDispatchContext.Provider value={memoizedDispatches2}>
            <div className='App'>
              <RouterProvider router={router} />
            </div>
          </ToiletInfoDispatchContext.Provider>
        </ToiletInfoStateContext.Provider>
      </ModalDispatchContext.Provider>
    </ModalStateContext.Provider>
  );
}

export default App;
