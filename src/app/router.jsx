import { createBrowserRouter } from "react-router-dom";
import Home from "../component/Home";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);
export default router;
