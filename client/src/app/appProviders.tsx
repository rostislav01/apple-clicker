import { Provider as ReduxProvider } from 'react-redux';
import { RouterProvider } from 'react-router-dom'
import { appStore } from './appStore';
import { appRouter } from './appRouter';

export const AppProviders = () => {
  return (
    <ReduxProvider store={appStore}>
      <RouterProvider router={appRouter()} />
    </ReduxProvider>
  );
};
