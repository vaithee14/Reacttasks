import { createBrowserRouter } from "react-router-dom";
import Home from "../component/Home";
import Hooks1 from "../component/hooks/Hook1";
import Hook2 from "../component/hooks/Hooks2";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/hooks1",
    element: <Hooks1 />,
  },
  {
    path: "/hooks2",
    element: <Hook2 />,
  },
]);
export default router;
