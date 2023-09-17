import React from "react";
import { Navigate } from "react-router-dom";
import { JobLayout } from "@/features/jobs";

const Jobs = React.lazy(() => import("../pages/jobs/jobs"));
const Job = React.lazy(() => import("../pages/job-details/job-details"));

export const appRoutes = [
  {
    element: <JobLayout />,
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
