import { createBrowserRouter } from "react-router-dom";
import Home from "../component/Home";
import Hooks1 from "../component/hooks/Hook1";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/hooks1",
    element: <Hooks1 />,
  },
]);
export default router;
