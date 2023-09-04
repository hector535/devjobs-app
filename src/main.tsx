import React from "react";
import ReactDOM from "react-dom/client";
import { Navigate, RouterProvider, createHashRouter } from "react-router-dom";
import { Root } from "./routes/root";
import "../sass/style.scss";

const Jobs = React.lazy(() => import("./routes/jobs/jobs"));
const Job = React.lazy(() => import("./routes/job/job"));

const router = createHashRouter([
  {
    element: <Root />,
    children: [
      {
        path: "/jobs",
        element: <Jobs />,
      },
      {
        path: "/jobs/:id",
        element: <Job />,
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to="/jobs" />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
