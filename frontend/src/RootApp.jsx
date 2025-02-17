import './style/app.css';
//Suspense component provides a fallback UI (the PageLoader) while the component is being loaded.
import { Suspense, lazy } from 'react';
//Enables client-side routing in your React application. This allows you to navigate between different views/pages
// without full page reloads.
import { BrowserRouter } from 'react-router-dom';
//wraps the application with the Provider, making the Redux store accessible to all components within the application.
// This allows components to access and update the application's state.
import { Provider } from 'react-redux';
import store from '@/redux/store';
import PageLoader from '@/components/PageLoader';

const IdurarOs = lazy(() => import('./apps/IdurarOs'));

export default function RoutApp() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Suspense fallback={<PageLoader />}>
          <IdurarOs />
        </Suspense>
      </Provider>
    </BrowserRouter>
  );
}
