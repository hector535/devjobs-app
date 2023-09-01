import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createHashRouter } from "react-router-dom";
import { Root } from "./routes/roots";
import { Jobs } from "./routes/jobs/jobs";
import "../sass/style.scss";

const router = createHashRouter([
  {
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Jobs />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  //   <React.StrictMode>
  //     <RouterProvider router={router} />
  //   </React.StrictMode>
  <RouterProvider router={router} />
);
