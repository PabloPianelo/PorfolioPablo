import { createBrowserRouter } from "react-router-dom";
import { Root } from "./root";
import Home from "../Home";
import ProjectDetails from "../pages/projects/ProjectDetails";




const router = createBrowserRouter([
  {
    // Ruta principal que pillara la estrutura de root.jsx
    path: "/",
    element: <Root />,
    // errorElement: <ErrorPage />,
    children: [
      // Ejemplo de ruta anidada
      {
        path: "/",
        element: <Home />,
      },{
        path: "/projects/ProjectDetails",
       element: <ProjectDetails />,
      }
    //   {
    //     path: "/*",
    //     element: <NotFount />,
    //   },
    ],
  },
]);

export default router;
