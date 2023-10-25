

import { createBrowserRouter } from "react-router-dom";
import { MainPage } from "../pages/main";
import { baseLayout } from "./layouts/baseLayout";


// type GuestGuardProps = {
//   children: ReactElement
// }


// function GuestGuard({ children }: GuestGuardProps) {

//   const isAuthorized = useAppSelector(selectIsAuthorized)

//   if (!isAuthorized) return <Navigate to="/login" />

//   return children
// }

// type AuthGuardProps = {
//   children: ReactElement
// }

// function AuthGuard({ children }: AuthGuardProps) {
//   const isAuthorized = useAppSelector(selectIsAuthorized)

//   if (isAuthorized) return <Navigate to="/" />

//   return children
// }

export const appRouter = () =>
  createBrowserRouter([
    {
      element: baseLayout,
      errorElement: <div>error</div>,
      // loader: async () => {
      //   return await featureToggleLoader(appStore.dispatch)
      // },
      children: [
				{
           path: '/',
           element: <MainPage />,
        }
      ],
    },
    // {
    //   element: layoutWithSidebar,
    //   errorElement: <div>error</div>,
    //   loader: async () => {
    //     return await featureToggleLoader(appStore.dispatch)
    //   },
    //   children: [
    //     {
    //       path: '/',
    //       element: <MainPage />,
    //     },
    //   ],
    // },
  ])