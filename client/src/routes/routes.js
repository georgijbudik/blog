import * as React from "react";
import { createBrowserRouter } from "react-router-dom";
import SignInPage from "../pages/SigninPage";
import SignUpPage from "../pages/SignupPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <SignInPage />,
  },
  {
    path: "/signup",
    element: <SignUpPage />,
  },
]);
