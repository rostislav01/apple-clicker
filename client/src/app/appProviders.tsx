import { Provider as ReduxProvider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { appStore } from "./appStore";
import { appRouter } from "./appRouter";
import { ToastContainer } from "react-toastify";

export const AppProviders = () => {
  return (
    <ReduxProvider store={appStore}>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      <RouterProvider router={appRouter()} />
    </ReduxProvider>
  );
};
