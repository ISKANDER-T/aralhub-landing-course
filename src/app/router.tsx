import { ROUTES } from "../shared/model/routes";
import { createBrowserRouter, Outlet } from "react-router-dom";
import { App } from "./app";
import { Providers } from "./providers";
import { protectedLoader, ProtectedRoute } from "./protected-route";

export const router = createBrowserRouter([
  {
    element: (
      <Providers>
        <App />
      </Providers>
    ),
    children: [
      {
        loader: protectedLoader,
        element: <ProtectedRoute />,
        children: [
          {
            element: (
              <>
                <Outlet />
              </>
            ),
            children: [
              {
                path: ROUTES.ADMIN,
                lazy: () => import("@/features/admin/admin.page"),
              },
            ],
          },
        ],
      },
      {
        path: ROUTES.HOME,
        lazy: () => import("@/features/home/home.page"),
      },
      {
        path: ROUTES.LOGIN,
        lazy: () => import("@/features/auth/login.page"),
      },
    ],
  },
]);
