import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/home";
import DetailsPage from "./pages/detailsPage/DetailsPage";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage/>,
    },
    {
      path: "/detail/:id",
      element:<DetailsPage/>
    }
  ]);