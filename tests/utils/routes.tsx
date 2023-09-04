import React from "react";
import { Navigate } from "react-router-dom";
import { Root } from "../../src/routes/root";
import Jobs from "../../src/routes/jobs/jobs";
import Job from "../../src/routes/job/job";

export const getRoutes = () => [
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
];
