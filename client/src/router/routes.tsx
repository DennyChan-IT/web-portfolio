import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />, // Example for another protected route
      },
    ])