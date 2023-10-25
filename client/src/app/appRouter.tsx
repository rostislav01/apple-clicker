

import { createBrowserRouter } from "react-router-dom";
import { MainPage } from "../pages/main";
import { baseLayout } from "./layouts/baseLayout";






export const appRouter = () =>
  createBrowserRouter([
    {
      element: baseLayout,
      errorElement: <div>error</div>,

      children: [
				{
           path: '/',
           element: <MainPage />,
        }
      ],
    }
  ])