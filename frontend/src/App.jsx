import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CategoryPage from "./pages/CategoryPage";
import ProfilePage from "./pages/ProfilePage";
import Layout from "./appLayouts/Layout";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <CategoryPage />,
        },
        {
          path: "profile/:id",
          element: <ProfilePage />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
