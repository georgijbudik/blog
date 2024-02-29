import * as React from "react";
import { createBrowserRouter } from "react-router-dom";
import SignInPage from "../pages/SigninPage";
import SignUpPage from "../pages/SignupPage";
import Blog from "../pages/Blog";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <SignUpPage />,
  },
  {
    path: "signin",
    element: <SignInPage />,
  },
  {
    path: "blog",
    element: <Blog />,
  },
]);
